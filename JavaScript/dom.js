var heading3 = document.createElement("h1");
var text3 = document.createTextNode("This is here!");

heading3.appendChild(text3);

var myDiv =document.querySelector(".my_div");
myDiv.appendChild(heading3)

var heading2 = document.getElementsByTagName("h1")[1];
myDiv.removeChild(heading2)

var heading0 = document.createElement("h1");
var text0 = document.createTextNode("This is Heading!");

heading0.appendChild(text0);
var heading1 = document.getElementsByTagName("h1")[0];
myDiv.insertBefore(heading0, heading1)
