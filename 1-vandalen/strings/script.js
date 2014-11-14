"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
	// Plats för förändring.	
	var newStr = "";
	if (str.length === 0) {
		throw new Error("Var god ange en sträng att omvandla!");
	}
	for (var i = 0; i < str.length; i++) {
		switch (str.charAt(i)) {
			//Changes A & a to # and adds to new string(newStr)
			case 'a':
				newStr += "#";
				break;
			case "A":
				newStr += "#";
				break;
			//Changes lowercase to uppercase and adds to new string(newStr)	
			case str.charAt(i).toLowerCase():
				newStr += str.charAt(i).toUpperCase();
				break;
			//Changes uppercase to lowercase and adds to new string(newStr)	
			case str.charAt(i).toUpperCase():
				newStr += str.charAt(i).toLowerCase();
				break;
			//Adds character to new string
			default:
				newStr += str.charAt(i);
				break;
			
		}
	}
	return newStr;

	

		// Returnera den konverterade strängen.
		// Vid fel, kasta ett undantag med ett meddelande till användaren. 
	






	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};