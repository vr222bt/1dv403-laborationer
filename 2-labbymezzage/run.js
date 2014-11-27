"use strict";

var messageBoard = {
    
    messages: [], 
    init:  function(){
        var textarea = document.querySelector("#text");
        var button = document.querySelector("#button");
    
        button.addEventListener("click", function(e){
        e.preventDefault();
        messageBoard.createMessage(textarea);
        });
        
    },
    createMessage: function(textarea){
        var messText = textarea.value;
        //No empty messages please
        if (messText === "") {
            return false;
        }
        var mess = new Message(messText, new Date());
        messageBoard.messages.push(mess);
        
        
        
    }
};

window.onload = messageBoard.init;