"use strict";


var Quiz = {
    init: function(){
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
                    console.log(xhr.responseText);
                    var response = JSON.parse(xhr.responseText);
                    console.log(response);
                    Quiz.render(response);
                    var button = document.querySelector("#button");
                    button.onclick = function(){
                        Quiz.sendAnswer(response);
                    };
                }
            }
            
        };
        
        xhr.open("GET", "http://vhost3.lnu.se:20080/question/1", true);
        
        xhr.send(null);
        

    },
    sendAnswer: function(response){
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4 ) {
                if (xhr.status === 200) {
                    console.log(xhr.responseText);
                }
                else
                    console.log(xhr.responseText);
            }
        };
        xhr.open("POST", response.nextURL, true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        var answer = document.querySelector("#answer").value;
        console.log(answer);
        var rply = {
            id: 1,
            answer: answer,
        };
        xhr.send(JSON.stringify(rply));
       
    }
    
};

window.onload = Quiz.init;