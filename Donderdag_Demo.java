
public class Donderdag_Demo {
	public static void main(String[] args) {
		Gebruiker jojo = new Gebruiker();
		jojo.voornaam = "Herman";
		jojo.userID = 1234;
		jojo.requestreason();
	}
}

class Gebruiker{
	String voornaam;
	int userID;
	void requestreason() {
		System.out.println(voornaam + "wil graag gebruik maken van de applicatie met het volgende userID:" + userID);
	}
	
}