"use strict";

var makePerson = function(persArr){


	var ages = [];
	var names = [];

    persArr.forEach(function(element, index, array){
        ages[index] = array[index].age;
        names[index] = array[index].name;
    });
    console.log(ages);
    console.log(names);
    
    //Sums ages
    var ageSum = ages.reduce(function(ageA,ageB){
        return ageA+ageB;
    });
    console.log("Åldersumman:" + ageSum);
    
    //Calculates average age
    var ageAverage = Math.round(ageSum/ages.length);
    console.log("Medelålder:" + ageAverage);
    
    
    //Highest age
    var ageMax = Math.max.apply(Math,ages);
    console.log("Högsta ålder:" + ageMax);
    
    //Lowest age
    var ageMin = Math.min.apply(Math,ages);
    console.log("Lägsta ålder:" + ageMin);
    
    
};

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
var result = makePerson(data);
// console.log(result);