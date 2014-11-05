"use strict";

window.onload = function(){

	
	
	var birthday = function(date){
	 //Checks if the date input can be read as a valid date	
	if(! Date.parse(date.toString())) {
		throw new Error ("Du måste ange ett giltigt datum(ÅÅÅÅ-MM-DD). Försök igen.");
	}

	var bday = new Date(date);
	var month = bday.getMonth();
	var day = bday.getDate();

    //Gets todays date
	var now = new Date();
	//Gets the current year for creating nextBirthay object for user
	var year = now.getFullYear();
	
	//Sets the time to 00:00 so able to compare to nextBirthday without taking time into account
	now.setHours(0);
	now.setMinutes(0);
	now.setSeconds(0);
	now.setMilliseconds(0);
	
	//Users next birthday
	var nextBirthday = new Date(year, month, day);
	if (nextBirthday < now) {
		nextBirthday.setFullYear(year+1);
	}
    return Math.round(((nextBirthday.getTime() - now.getTime())/(1000*60*60*24)));
    
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
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};