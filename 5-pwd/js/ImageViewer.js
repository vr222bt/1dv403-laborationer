"use strict";

var Imageviewer = {
  init: function(){
      alert("hej");
  },
  getImages: function(){
       var xhr = new XMLHttpRequest();
       
       xhr.onreadystatechange = function (){
            if (xhr.readyState === 4) {
                if (xhr.status == 200) {
                    var response = JSON.parse(xhr.responseText);
                    console.log(response);

                }
            }
            
        };
        
         xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/" , true);
         xhr.send(null);
  }
};

