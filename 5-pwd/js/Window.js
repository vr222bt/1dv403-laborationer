"use strict";

var Window = {
    init: function(){
      Window.startWindow(); 
      
      
    },
    startWindow: function(){
        var button = document.querySelector("#bar img");
        button.onclick = function(){
            Window.createWindow();
        };
        Window.toggleWindow();
    },
    toggleWindow: function(target){
        var targetWindow = target.parentNode.parentNode;
        var windowDiv = targetWindow;
        windowDiv.classList.add("hide");

    },
    createWindow: function(){
        var div = document.querySelector("#desk");
        
        var windowDiv = document.createElement("div");
        windowDiv.className = "window";
        
        var header = document.createElement("header");
        windowDiv.appendChild(header);
        
        var img = document.createElement("img");
        img.src = "pics/test-icon.jpg";
        img.className = "icon";
        header.appendChild(img);
        
        var imgClose = document.createElement("img");
        imgClose.src = "pics/close-icon.png";
        imgClose.className = "close";
        imgClose.onclick = function(e){
            console.log(e.target);
            Window.toggleWindow(e.target);
        };
        header.appendChild(imgClose);
        
        var p = document.createElement("p");
        p.innerHTML = "Test";
        header.appendChild(p);
        
        
        var main = document.createElement("main");
        windowDiv.appendChild(main);
        
        var footer = document.createElement("footer");
        windowDiv.appendChild(footer);
        
        //Status
        var imgStatus = document.createElement("img");
        imgStatus.src = "pics/ajax-loader.gif";
        imgStatus.classList.add("icon");
        imgStatus.classList.add("hide");
        footer.appendChild(imgStatus);
        
        div.appendChild(windowDiv);
        
    }
};

window.onload = Window.init;