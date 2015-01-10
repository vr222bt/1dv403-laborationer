"use strict";


var Quiz = {
    newURL: "http://vhost3.lnu.se:20080/question/1",
    guesses: 0,
    totalGuesses: [],
    
    init: function(){
        Quiz.getQuestion();
    },
    render: function(response){
        
        var question = document.querySelector("#question");
        question.innerHTML = response.question;

    },
    getQuestion: function(){
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function (){
            if (xhr.readyState === 4) {
                if (xhr.status == 200) {
                    var response = JSON.parse(xhr.responseText);
                    console.log(response);
                    Quiz.render(response);
                    Quiz.newURL = response.nextURL;
                    var button = document.querySelector("#button");
                    button.onclick = function(e){
                        e.preventDefault();
                        Quiz.sendAnswer(response);
                    };
                    var textarea = document.querySelector("#answer");
                    textarea.onkeypress = function(e){
                      if (!e) {  
                          e = window.event; 
                          }  
                      if (e.keyCode === 13) {
                          e.preventDefault();
                          Quiz.sendAnswer(response);
                      }
                    };
                }
            }
            
        };
        
        xhr.open("GET", Quiz.newURL , true);
        
        xhr.send(null);
        

    },
    sendAnswer: function(response){
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4 ) {
                if (xhr.status === 200) {
                    Quiz.guesses += 1;
                    Quiz.totalGuesses.push(Quiz.guesses);
                    Quiz.guesses = 0;
                    console.log(Quiz.totalGuesses);
                    var newResponse = JSON.parse(xhr.responseText);
                    console.log(newResponse);
                    Quiz.correctMessage(answer);
                    Quiz.newURL = newResponse.nextURL;
                    Quiz.getQuestion();
                    if (newResponse.nextURL === undefined) {
                        Quiz.scoreScreen();
                        alert("du vann");
                    }
                    
                }
                if (xhr.status === 400) {
                    Quiz.guesses += 1;
                    Quiz.wrongMessage(answer);
                }
                else{
                    var newResponse2 = JSON.parse(xhr.responseText);
                    console.log(newResponse2);
                }
                   
            }
        };
        xhr.open("POST", Quiz.newURL, true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        var answer = document.querySelector("#answer").value;
        console.log(answer);
        var rply = {
            id: 1,
            answer: answer,
        };
        xhr.send(JSON.stringify(rply));
       
    },
    correctMessage: function(answer){
        document.querySelector("#button").classList.remove("error");
        var pError = document.querySelector("#error");
        pError.innerHTML = "";

    },
    wrongMessage: function(answer){
        document.querySelector("#button").className = "error";
        var p = document.querySelector("#error");
        p.className = "error";
        p.innerHTML = "Fel svar (" + answer +")";
        
    },
    scoreScreen: function(){
        var main = document.querySelector("main");
        var header = document.createElement("h2");
        header.innerHTML = "Resultat:";
        main.appendChild(header);
        var table = document.createElement("table");
        var tbody = document.createElement("tbody");
        table.appendChild(tbody);
        
        for (var i = 0; i < 2; i++) {
            var tr = document.createElement("tr");
            tbody.appendChild(tr);
            for (var j = 0; j < Quiz.totalGuesses.length + 1; j++) {
                        var td = document.createElement("td");
                        if (j === 0 && i === 0) {
                            td.innerHTML = "Fråga";
                        }
                        else if (i === 0) {
                            td.innerHTML = j;
                        }
                        else {
                            if (j === 0 && i === 1) {
                                td.innerHTML = "Försök";
                            }
                            else{
                                td.innerHTML = Quiz.totalGuesses[j - 1];
                            }
                            
                        }
                        

                        tr.appendChild(td);
            }
        }
        
        main.appendChild(table);

    }
};

window.onload = Quiz.init;