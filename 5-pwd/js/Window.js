"use strict";

var Window = {
    windowCounter: 0,
    init: function(){
        Window.startWindow(); 

      
      
    },
    startWindow: function(){
        
        var button = document.querySelector("#imgViewer");
        //Bara ett fönster åt gången tills det kan hanteras flera
        if (Window.windowCounter === 0) {
            button.onclick = function(){
                if (Window.windowCounter === 0) {
                    Window.createWindow(Imageviewer.header, Imageviewer.icon);
                    Imageviewer.getImages();
                    Window.windowCounter += 1;
                }
            };
            
        }
 
    },
    toggleWindow: function(target){
        var targetWindow = target.parentNode.parentNode;
        var windowDiv = targetWindow;
        var desk = document.getElementById("desk");
        desk.removeChild(windowDiv);
        Window.windowCounter -= 1;




    },
    createWindow: function(head, icon){
        var div = document.querySelector("#desk");
        
        var windowDiv = document.createElement("div");
        windowDiv.className = "window";
        
        var header = document.createElement("header");
        windowDiv.appendChild(header);
        
        var img = document.createElement("img");
        img.src = icon || "pics/test-icon.jpg";
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
        p.innerHTML = head || "Test";
        header.appendChild(p);
        
        
        var mainContent = document.createElement("div");
        mainContent.classList.add("content");
        windowDiv.appendChild(mainContent);
        
        var footer = document.createElement("footer");
        windowDiv.appendChild(footer);
        
        //Status
        var imgStatus = document.createElement("img");
        imgStatus.src = "pics/ajax-loader.gif";
        imgStatus.classList.add("icon");
        imgStatus.classList.add("hide");
        footer.appendChild(imgStatus);
        
        div.appendChild(windowDiv);



        
    },
    toggleLoading: function(){
        var imgStatus = document.querySelector("footer img");
        imgStatus.classList.toggle("hide");
    }
};

window.onload = Window.init;