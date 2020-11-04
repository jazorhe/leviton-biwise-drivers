var date   = new Date();

var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
if (hours < 10) { hours = "0" + hours;}
if (minutes < 10) { minutes = "0" + minutes;}
if (seconds < 10) { seconds = "0" + seconds;}
time = hours + ":" + minutes + " ";
day = days[date.getDay()];
date = months[date.getMonth()] + " " + date.getDate();

GUIAPI.ShowFeedback("CLOCK_TIME",time,true);
GUIAPI.ShowFeedback("CLOCK_DATE",date,true);
GUIAPI.ShowFeedback("CLOCK_DAY",day,true);

return "";
