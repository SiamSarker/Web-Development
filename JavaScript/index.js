// getElementbyId()
// getElementsbyTagName()
// getElementdbyClassName()
// querySelector()

document.getElementById("h1").innerHTML = "Hello World"
document.getElementById("h2").innerHTML = "Good Bye"

// document.getElementById("p").innerHTML = 'This is Siam Sarker' # for id  . for class 

document.querySelector("#pi").innerHTML = "Hello There";


var myVar = document.querySelector("#pid");

function myMessage1(){
    myVar.innerHTML = 'Clieked 1';
}
function myMessage2(){
        myVar.innerHTML = 'Clieked 2';
}

var myPic = document.querySelector("#pic");

function myPicture1(){
    myPic.src = "Images/siam1.jpg"
}
function myPicture2(){
        myPic.src = "Images/siam2.jpg"
}