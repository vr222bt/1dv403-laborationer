"use strict";

var Imageviewer = {
  init: function(){
      
  },
  header: "Image Viewer",
  icon: "pics/gallery-icon.png",
  
  getImages: function(){
       Window.toggleLoading();
       var xhr = new XMLHttpRequest();
       
       xhr.onreadystatechange = function (){
            if (xhr.readyState === 4) {
                if (xhr.status == 200) {
                    var response = JSON.parse(xhr.responseText);
                    Imageviewer.renderImages(response);

                }
            }
            
        };
        
         xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/" , true);
         xhr.send(null);
  },
  renderImages: function(response){
      var heights = [];
      var widths = [];
      for (var j = 0; j < response.length; j++) {
          heights[j] = response[j].thumbHeight;
          widths[j] = response[j].thumbWidth;
      }
      var maxHeight = Math.max.apply(Math, heights);
      var maxWidth = Math.max.apply(Math, widths);

      var content = document.querySelector(".content");
      for (var i = 0; i < response.length; i++) {
        var img = document.createElement("img");
        img.src = response[i].thumbURL;
        img.URL = response[i].URL;
        img.addEventListener("click", Imageviewer.changeBackground);
        var container = document.createElement("div");
        container.classList.add("imgContainer");
        container.style.width = maxWidth + "px";
        container.style.height = maxHeight + "px";
        
        container.appendChild(img);
        content.appendChild(container);

      }
        Window.toggleLoading();

  },
  changeBackground: function(){
    var container = document.querySelector("#container");
    container.style.backgroundImage = "url(" + this.URL + ")";  
  }
};

