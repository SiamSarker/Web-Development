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


var photos = ["Images/siam1.jpg","Images/siam2.jpg","Images/siam3.jpg"];
var imgTag = document.querySelector("#scrollpic");

var count = 0;
function next()
{
    count++;
    if(count>=photos.length)
    {
        count = 0;
        imgTag.src = photos[count];    
    }
    else
        imgTag.src = photos[count];
}

function prev()
{
    count--;
    if(count < 0)
    {
        count = photos.length - 1;
        imgTag.src = photos[count];    
    }
    else
        imgTag.src = photos[count];

}

function addStyle()
{
    document.querySelector("#paraID1").classList.add("para-style");
    document.querySelector("#paraID2").classList.add("para-style2");
}

function removeStyle()
{
    document.querySelector("#paraID1").classList.remove("para-style");
    document.querySelector("#paraID2").classList.remove("para-style2");
}