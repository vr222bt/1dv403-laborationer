"use strict";

var Memory = {
    bricks: [],
    brickCounter: [],
    pairCounter: 0,
    attemptCounter: 0,
    cols: 2, 
    rows: 4,
    
    init: function(){
        Memory.pairCounter = 0;
        Memory.attemptCounter = 0;
        Memory.bricks = RandomGenerator.getPictureArray(Memory.rows,Memory.cols);
        Memory.renderBoard(Memory.rows,Memory.cols);
        
        
       
   },
   renderBoard: function(rows, cols){
        var gameTable = document.querySelector("#gameTable");
        var table = document.createElement("table");
        var tbody = document.createElement("tbody");
        table.appendChild(tbody);
        
        var brickID = 0;
        for (var i = 0; i < rows; i++) {
            var tr = document.createElement("tr");
            tbody.appendChild(tr);
            for (var j = 0; j < cols; j++) {
                var td = document.createElement("td");
                tr.appendChild(td);
                var a = document.createElement("a");
                a.href = "#";
                var brickDefault = document.createElement("img");
                brickDefault.src = "pics/0.png";
                a.appendChild(brickDefault);
                td.appendChild(a);
                Memory.turnBrick(brickID, a);
                brickID +=1;
                
            }
        }
        gameTable.appendChild(table);
       
   },
   turnBrick: function(brickID, a){
   
       a.addEventListener("click", function(e){
           e.preventDefault();
           var img = a.querySelector("img");
           if (img.src !== "https://preview.c9.io/vr222bt/1dv403-laborationer/3-gameon/memory/pics/0.png" ) { //Varför funkar inte relativa sökvägar?
               return false;
           }
           Memory.brickCounter.push(a);
           if (Memory.brickCounter.length <= 2) {
                
                img.src = "pics/" + Memory.bricks[brickID] + ".png";
           }
           if (Memory.brickCounter.length === 2) {
               setTimeout(function() {
                   Memory.compareBrick();
               }, 500);
           }
           
       });
       
   },
   compareBrick: function(brickID, a){
       Memory.attemptCounter += 1;
       if (Memory.brickCounter[0].querySelector("img").src === Memory.brickCounter[1].querySelector("img").src) {
           Memory.pairCounter += 1;
           if (Memory.pairCounter === (Memory.rows*Memory.cols/2)) {
               Memory.message("Spelet är slut, du vann! Antal försök: " + Memory.attemptCounter);
               
              /* if (confirm("Du vann! Vill du spela igen?")) {
                   Memory.renderBoard(Memory.rows, Memory.cols);
               }
              */ 
           }
           
       }
       else {
       Memory.brickCounter[0].querySelector("img").src = "pics/0.png";
       Memory.brickCounter[1].querySelector("img").src = "pics/0.png";
       
       }
       console.log(Memory.attemptCounter);
       Memory.brickCounter = [];
       
   },
   message: function(text){
        var gameTable = document.querySelector("#gameTable");
        var p = document.createElement("p");
        p.id = "score";
        p.innerHTML = text;
        gameTable.appendChild(p);
       
        var button = document.createElement("input");
        button.type = "button";
        button.value = "Spela igen";
        button.onclick = function(e){
            e.preventDefault();
            Memory.init();
        };
        gameTable.appendChild(button);
 
       
   }
   
};

window.onload = Memory.init;