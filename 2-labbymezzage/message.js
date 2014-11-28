"use strict";

function Message(message, date){
    
    this.getText = function() {
        return message;
    };
    this.setText = function(_text) {
        message = _text;
    };
    this.getDate = function() {
        return date;
    };
    this.setDate = function(_date) {
        date = _date;
    };
}

Message.prototype.toString = function(){
    return this.getText()+" ("+this.getDate()+")";
};

Message.prototype.getHTMLText = function(){
    return this.getText().replace("\n","<br />");
};

Message.prototype.getDateText = function(){
    var months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September","Oktober", "November", "December"];
    var month = months[this.getDate().getMonth()];
    var day = this.getDate().getDate();
    var year = this.getDate().getFullYear();
    var hours = this.getDate().getHours();
    var minutes = this.getDate().getMinutes();
    return day + " " + month +" "+ year +" "+ hours + ":" + minutes;
    
    
};
    

