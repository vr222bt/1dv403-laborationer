"use strict";

var makePerson = function(persArr){

    //Creates arrays for ages and names
    if (!Array.isArray(persArr)) {
        throw new Error("Input must be an array") 
    }
	var ages = [];
	var names = [];
    ages = persArr.map(function(person){
        if (person.hasOwnProperty("age")) {
            return person.age;
        }
        //Gets the age if the input was date of birth
        if (person.hasOwnProperty("born")) {
            return new Date().getFullYear() - new Date(person.born).getFullYear(); 
        }
    });
    names = persArr.map(function(person){
        return person.name;
    });
    
    //Checks if age is a valid number
    function isInteger(age) {
        return (typeof age === 'number') && (age % 1 === 0);
    }
    for (var i = 0; i < ages.length; i++) {
        if (!isInteger(ages[i])) {
            throw new Error(ages[i] + " is not a valid age");
        }
    }
    //Checks if name is a string
    for (var i = 0; i < names.length; i++) {
        if (typeof names[i] !== "string") {
            throw new Error(names[i] + " is not a valid name");
        }
    }
    
    //Sums ages
    var ageSum = ages.reduce(function(ageA,ageB){
        return ageA+ageB;
    });
    //Creates object
    var people = {};
    //Calculates average age
    people.averageAge = Math.round(ageSum/ages.length);
    //Highest age
    people.maxAge = Math.max.apply(Math,ages);
    //Lowest age
    people.minAge = Math.min.apply(Math,ages);
	function localSort(a, b) {
    return a.toString().localeCompare(b.toString());
    }
    names = names.sort(localSort);
    people.names = names.reduce(function(name1, name2){
        return name1 + ", " + name2;
    });
    return people;
    
};

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
var result = makePerson(data);
console.log(result);
