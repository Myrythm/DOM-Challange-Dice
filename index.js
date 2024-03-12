var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");

if (randomNumber1 === 1) {
    img1.src = "./images/dice1.png";
} else if (randomNumber1 === 2) {
    img1.src = "./images/dice2.png";
} else if (randomNumber1 === 3) {
    img1.src = "./images/dice3.png";
} else if (randomNumber1 === 4) {
    img1.src = "./images/dice4.png";
} else if (randomNumber1 === 5) {
    img1.src = "./images/dice5.png"; // Added ".png" extension
} else if (randomNumber1 === 6) {
    img1.src = "./images/dice6.png";
}

if (randomNumber2 === 1) {
    img2.src = "./images/dice1.png";
} else if (randomNumber2 === 2) {
    img2.src = "./images/dice2.png";
} else if (randomNumber2 === 3) {
    img2.src = "./images/dice3.png";
} else if (randomNumber2 === 4) {
    img2.src = "./images/dice4.png";
} else if (randomNumber2 === 5) {
    img2.src = "./images/dice5.png"; // Added ".png" extension
} else if (randomNumber2 === 6) {
    img2.src = "./images/dice6.png";
}

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 WIN"
}else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 WIN"
    
}else{
    document.querySelector("h1").innerHTML = "Draw"
    
}