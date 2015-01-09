"use strict";


var Quiz = {
    newURL: "http://vhost3.lnu.se:20080/question/1",
    init: function(){
        
       /* textarea.onkeypress = function(e){
          if (!e) {  
              e = window.event; 
              }  
          if (e.keyCode === 13 && !e.shiftKey) {
              e.preventDefault();
              messageBoard.createMessage(textarea);
          }
     */
        Quiz.getQuestion();
        

    },
    render: function(response){
        var main = document.querySelector("main");
        var question = document.createElement("p");
        question.innerHTML = response.question;
        main.insertBefore(question, main.firstChild);
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
                    var newResponse = JSON.parse(xhr.responseText);
                    console.log(newResponse);
                    Quiz.correctMessage(answer);
                    Quiz.newURL = newResponse.nextURL;
                    Quiz.getQuestion();
                    
                }
                if (xhr.status === 400) {
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
        var question = document.querySelector("p:first-child");
        var p = document.createElement("p");
        p.innerHTML = "Rätt! (" + answer +")";
        question.appendChild(p);
    },
    wrongMessage: function(answer){
        document.querySelector("#button").className = "error";
    }
    
};

window.onload = Quiz.init;