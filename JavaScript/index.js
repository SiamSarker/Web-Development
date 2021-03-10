// getElementbyId()
// getElementsbyTagName()
// getElementdbyClassName()
// querySelector()

var h1 = document.getElementById("h1");
h1.innerHTML = "Hello World"
h1.addEventListener("mouseover", function(){
    h1.classList.add("h1-style");
});
h1.addEventListener("mouseout", function(){
    h1.classList.remove("h1-style");
});


document.getElementById("h2").innerHTML = "Listen to music by clicking.."

// document.getElementById("p").innerHTML = 'This is Siam Sarker' # for id  . for class 

document.addEventListener("keypress", function(event){
    var text = event.key;
    document.querySelector("#pi").classList.add("para-style");
    document.querySelector("#pi").innerHTML = "You Have Pressed "+text;
})




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

var songs = document.querySelectorAll(".mymusic");

for (var i = 0; i < songs.length; i++)
{
    songs[i].addEventListener("click", function (){
        var name = this.innerHTML;
        console.log(name);
        var audio = new Audio("mymusic/"+name+".mp3");
        audio.play();

        document.querySelector("."+name).classList.add("anim");
        
        setTimeout(function(){
            document.querySelector("."+name).classList.remove("anim");
        }, 1000);

        

    });
}
