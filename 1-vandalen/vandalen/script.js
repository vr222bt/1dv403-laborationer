"use strict";

var makePerson = function(persArr){


	var ages = [];
	var names = [];
    ages = persArr.map(function(person){
        return person.age;
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

    //Sums ages
    var ageSum = ages.reduce(function(ageA,ageB){
        return ageA+ageB;
    });
    //Creates object and properties
    var object = {};
    //Calculates average age
    object.averageAge = Math.round(ageSum/ages.length);
    //Highest age
    object.maxAge = Math.max.apply(Math,ages);
    //Lowest age
    object.minAge = Math.min.apply(Math,ages);
	function localSort(a, b) {
    return a.toString().localeCompare(b.toString());
    }
    names = names.sort(localSort);
    //Makes names into one string
    object.names = names.reduce(function(name1, name2){
        return name1 + ", " + name2;
    });
    return object;
    
};

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
var result = makePerson(data);
console.log(result);
