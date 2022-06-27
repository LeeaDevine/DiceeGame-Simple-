var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var dice1Image = document.querySelector(".img1");
var dice2Image = document.querySelector(".img2");
var titleHeading = document.querySelector("h1");

function rollDice1() {
  console.log(randomNumber1);
  if (randomNumber1 === 1) {
    dice1Image.setAttribute("src", "images/dice1.png");
  } else if (randomNumber1 === 2) {
    dice1Image.setAttribute("src", "images/dice2.png");
  } else if (randomNumber1 === 3) {
    dice1Image.setAttribute("src", "images/dice3.png");
  } else if (randomNumber1 === 4) {
    dice1Image.setAttribute("src", "images/dice4.png");
  } else if (randomNumber1 === 5) {
    dice1Image.setAttribute("src", "images/dice5.png");
  } else {
    dice1Image.setAttribute("src", "images/dice6.png");
  }
}
function rollDice2() {
  console.log(randomNumber2);
  if (randomNumber2 === 1) {
    dice2Image.setAttribute("src", "images/dice1.png");
  } else if (randomNumber2 === 2) {
    dice2Image.setAttribute("src", "images/dice2.png");
  } else if (randomNumber2 === 3) {
    dice2Image.setAttribute("src", "images/dice3.png");
  } else if (randomNumber2 === 4) {
    dice2Image.setAttribute("src", "images/dice4.png");
  } else if (randomNumber2 === 5) {
    dice2Image.setAttribute("src", "images/dice5.png");
  } else {
    dice2Image.setAttribute("src", "images/dice6.png");
  }
}

function playerWin() {
  if (randomNumber1 > randomNumber2) {
    titleHeading.innerHTML = "Player 1 Wins";
  } else if (randomNumber2 > randomNumber1) {
    titleHeading.innerHTML = "Player 2 Wins";
  } else {
    titleHeading.innerHTML = "Draw!";
  }
}

// Call functions
rollDice1();
rollDice2();
playerWin();
