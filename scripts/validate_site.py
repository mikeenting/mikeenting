#!/usr/bin/env python3
"""Validate basic HTML structure and local references for this static site."""

from html.parser import HTMLParser
from pathlib import Path
import re
import sys
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parents[1]
HTML_FILES = sorted(ROOT.glob("*.html"))


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.tags = set()
        self.ids = set()
        self.duplicate_ids = set()
        self.references = []
        self.has_language = False

    def handle_starttag(self, tag, attrs):
        self._record_tag(tag, attrs)

    def handle_startendtag(self, tag, attrs):
        self._record_tag(tag, attrs)

    def _record_tag(self, tag, attrs):
        attributes = dict(attrs)
        self.tags.add(tag)
        if tag == "html":
            self.has_language = bool(attributes.get("lang"))

        element_id = attributes.get("id")
        if element_id:
            if element_id in self.ids:
                self.duplicate_ids.add(element_id)
            self.ids.add(element_id)

        for attribute in ("href", "src"):
            reference = attributes.get(attribute)
            if reference:
                self.references.append((attribute, reference))


def is_within_root(path):
    try:
        path.relative_to(ROOT)
        return True
    except ValueError:
        return False


def main():
    errors = []
    pages = {}

    if not HTML_FILES:
        print("No HTML pages found.", file=sys.stderr)
        return 1

    for page in HTML_FILES:
        content = page.read_text(encoding="utf-8")
        parser = PageParser()
        parser.feed(content)
        parser.close()

        missing_tags = {"html", "head", "body", "title"} - parser.tags
        if not content.lstrip().lower().startswith("<!doctype html>"):
            errors.append(f"{page.name}: missing HTML5 doctype")
        if missing_tags:
            errors.append(f"{page.name}: missing required tags: {', '.join(sorted(missing_tags))}")
        if not parser.has_language:
            errors.append(f"{page.name}: <html> must declare a language")
        for element_id in sorted(parser.duplicate_ids):
            errors.append(f"{page.name}: duplicate id '{element_id}'")
        pages[page.resolve()] = parser

    for page, parser in pages.items():
        for attribute, reference in parser.references:
            parsed = urlsplit(reference)
            if parsed.scheme or parsed.netloc:
                continue

            relative_path = unquote(parsed.path)
            target = (page.parent / relative_path).resolve() if relative_path else page
            if not is_within_root(target):
                errors.append(f"{page.relative_to(ROOT)}: {attribute} escapes the site root: {reference}")
                continue
            if not target.is_file():
                errors.append(f"{page.relative_to(ROOT)}: missing local {attribute}: {reference}")
                continue

            if parsed.fragment and target.suffix.lower() == ".html":
                target_parser = pages.get(target)
                if target_parser and unquote(parsed.fragment) not in target_parser.ids:
                    errors.append(f"{page.relative_to(ROOT)}: missing fragment target: {reference}")

    timeline_js = ROOT / "timeline.js"
    if timeline_js.is_file():
        for asset in re.findall(r"\bsrc:\s*['\"]([^'\"]+)['\"]", timeline_js.read_text(encoding="utf-8")):
            target = (ROOT / unquote(urlsplit(asset).path)).resolve()
            if not is_within_root(target) or not target.is_file():
                errors.append(f"timeline.js: missing local asset: {asset}")

    if errors:
        print("\n".join(f"ERROR: {error}" for error in errors), file=sys.stderr)
        return 1

    print(f"Validated {len(HTML_FILES)} HTML pages and their local references.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
