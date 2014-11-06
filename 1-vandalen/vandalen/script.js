"use strict";

var makePerson = function(persArr){


	// Din kod här...
    var ages = [];
    ages = persArr.map(function(person){
        return person.age;
    });
    

    //Sums ages
    var ageSum = ages.reduce(function(a,b){
        return a+b;
    });
    console.log("Åldersumman:" + ageSum);
    
    //Calculates average age
    var ageAverage = Math.round(ageSum/ages.length);
    console.log("Medelålder:" + ageAverage);
    
    //Highest age
    var ageMax = Math.max(ages);
    console.log("Högsta ålder:" + ageMax);
    
    //Lowest age
    var ageMin = Math.min(ages);
    console.log("Högsta ålder:" + ageMin);
    
    
};

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
makePerson(data);