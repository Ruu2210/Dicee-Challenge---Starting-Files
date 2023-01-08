
var randomVariable1 = Math.floor(Math.random() * 6) + 1;

var randomImage = "dice" + randomVariable1 + ".png";

var randomImageSource1 = "images/" + randomImage;

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);



var randomVariable2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "dice" + randomVariable2 +".png";

var randomImageSource2 = "images/" + randomImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if(randomVariable1 > randomVariable2){
    document.querySelector("h1").innerHTML ="🎌Player 1 Wins!";
}
else if(randomVariable2>randomVariable1){
    document.querySelector("h1").innerHTML="🎌Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="👾Draw!";
}