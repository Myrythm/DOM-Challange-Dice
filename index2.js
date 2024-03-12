var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg = "dice" + randomNumber1 + ".png";
var randomImageSrc = "images/" + randomDiceImg;

document.querySelectorAll("img")[0].setAttribute("src", randomImageSrc);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg2 = "dice" + randomNumber2 + ".png";
var randomImageSrc2 = "images/" + randomDiceImg2;
document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 WIN"
}else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 WIN"
    
}else{
    document.querySelector("h1").innerHTML = "Draw"
    
}
