"use strict";

var messageBoard = {
    
    messages: [], 
    init:  function(){
        var textarea = document.querySelector("#text");
        var button = document.querySelector("#button");
        
        textarea.onkeypress = function(e){
          if (!e) {  
              e = window.event; 
              }  
          if (e.keyCode === 13 && !e.shiftKey) {
              e.preventDefault();
              messageBoard.createMessage(textarea);
          }
        };
    
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
        messageBoard.renderMessages();
        messageBoard.freshTextarea(textarea);
        
        
        
        
    },
    renderMessage: function(messageID){
        
        var div1 = document.querySelector("#messages");
        var div2 = document.createElement("div");
        div2.className = "message";
        //Deletebutton
        var aDelete = document.createElement("a");
        aDelete.href = "#";
        var imgDelete = document.createElement("img");
        imgDelete.src = "cross-button.png";
        aDelete.appendChild(imgDelete);
        div2.appendChild(aDelete);
        //Clockbutton
        var aTime = document.createElement("a");
        aTime.href = "#";
        var imgTime = document.createElement("img");
        imgTime.src = "clock-icon.jpg";
        aTime.appendChild(imgTime);
        div2.appendChild(aTime);
        //Message
        var p = document.createElement("p");
        p.innerHTML = messageBoard.messages[messageID].getHTMLText();
        div2.appendChild(p);
        div1.appendChild(div2);
        //time
        var date = document.createElement("footer");
        date.innerHTML = messageBoard.messages[messageID].getDate();
        div2.appendChild(date);
        
        //Delete event
        aDelete.onclick = function(e){
          e.preventDefault();  
          messageBoard.deleteMessage(messageID);
        };
        //Time event
        aTime.onclick = function(e){
            e.preventDefault();
            messageBoard.showTime(messageID);
        };
        
    
    },
    showTime: function(messageID){
        alert("Inlägget skapades den " + messageBoard.messages[messageID].getDateText());
    },
    deleteMessage: function(messageID){
        if (confirm("Är du säker på att du vill ta bort det här meddelandet?")) {
            messageBoard.messages.splice(messageID,1);
            messageBoard.renderMessages();
        }
    },
    renderMessages: function(){
        //Removes all messages
        document.querySelector("#messages").innerHTML ="";
        
        //Render all messages
        for (var i = 0; i < messageBoard.messages.length; ++i) {
            messageBoard.renderMessage(i);
        }
        messageBoard.messageCounter();
    },
    freshTextarea: function(textarea){
        textarea.value = "";
    },
    messageCounter: function(){
        var counter = messageBoard.messages.length;
        var div1 = document.querySelector("#messages");
        var numMess = document.createElement("p");
        numMess.id = "counter";
        numMess.innerHTML = "Antal meddelanden: " + counter;
        div1.appendChild(numMess);
    }
};

window.onload = messageBoard.init;