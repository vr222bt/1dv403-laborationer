"use strict";


var Quiz = {
    init: function(){
        Quiz.getQuestion();
    },
    render: function(){
        
    },
    getQuestion: function(){
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function (){
            if (xhr.readyState === 4) {
                if (xhr.status == 200) {

                    console.log(xhr.responseText);
                }
            }
            
        };
        
        xhr.open("GET", "http://vhost3.lnu.se:20080/question/1", true);
        
        xhr.send(null);
    }
    
};

window.onload = Quiz.init;