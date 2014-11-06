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
    
    //Creates object and properties
    var object = {};
    //Calculates average age
    object.averageAge = Math.round(ageSum/ages.length);
    console.log("Medelålder:" + object.averageAge);
    //Highest age
    object.maxAge = Math.max.apply(Math,ages);
    console.log("Högsta ålder:" + object.maxAge);
    //Lowest age
    object.minAge = Math.min.apply(Math,ages);
    console.log("Lägsta ålder:" + object.minAge);
    
    //Makes names into one string
    object.names = names.reduce(function(name1, name2){
        return name1 + " " + name2;
    });
    return object;
    
};

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
var result = makePerson(data);
console.log(result);
