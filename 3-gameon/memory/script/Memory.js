"use strict";

var Memory = {
    bricks: [],
    init: function(){
        var cols = 4;
        var rows = 4;
        Memory.bricks = RandomGenerator.getPictureArray(rows,cols);
        Memory.renderBoard(rows,cols);
        
        
       
   },
   renderBoard: function(rows, cols){
        var gameTable = document.querySelector("#gameTable");
        var table = document.createElement("table");
        var tbody = document.createElement("tbody");
        table.appendChild(tbody);
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
                a.onclick = Memory.turnBrick;
            }
        }
        gameTable.appendChild(table);
       
   },
   turnBrick: function(){
       alert(Memory.bricks);
   }
};

window.onload = Memory.init;