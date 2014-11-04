"use strict";

window.onload = function(){
	var max = 100;
	var min = 0;
	var	secret = Math.floor( Math.random() * (max-min)+1 )+min;
	var count = 0;
	// I denna funktion ska du skriva koden för att hantera "spelet"
	var guess = function(number){
		console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
		console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.
		
		// Plats för förändring.

		count += 1;
		
		try {
			if (isNaN(number)) {
				throw ("\"" + number +"\" är inget tal. Du måste ange ett tal!");
			}
			if (number > 100 || number < 0) {
				throw  ("Du måste ange ett tal mellan 0 och 100");
			}
		} 
		catch (e) {
			return [false, e];
		}
		if (secret == number) {
			return [true, "Grattis du vann! Det hemliga talet var " + secret + " och du behövde " + count + " gissningar för att hitta det"];
		}
		if (secret > number) {
			return [false, "Det hemliga talet är högre!"];
		}
		if (secret < number) {
			return [false, "Det hemliga talet är lägre!"];
		}

		
	};
	
	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	
	});
};