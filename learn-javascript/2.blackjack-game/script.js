/*
Point of Blackjack to get a hand of 21, at least close to 21
if you get above 21 you are out of the game

Jack, Queen and King all worth 10
Ace is worth 11 and 1, player get to choose what suits
for now let's give Ace 11
 */

let player = {
  name: "John",
  chips: 134,
}

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let startMessage = document.getElementById("startMessage");
let sumMessage = document.getElementById("sumMessage");
let cardsElement = document.getElementById("cardsElement");
let playerDetails = document.getElementById("playerDetails");

playerDetails.textContent = player.name + ": $" + player.chips

// this is a more dynamic method, have to be specific by saying this is an id or a class
// let sumMessage = document.querySelector("#sumMessage");

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;

  if (randomCard === 1) {
    return 11;
  } else if (randomCard === 11 || randomCard === 12 || randomCard === 13) {
    return 10;
  } else {
    return randomCard;
  }
}

function startGame() {
  isAlive = true;

  let firstCard = getRandomCard();
  let secondCard = getRandomCard();

  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

// Redner game function
function renderGame() {
  cardsElement.textContent = "Cards: ";

  for (i = 0; i < cards.length; i++) {
    cardsElement.textContent += cards[i] + ", ";
  }

  sumMessage.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😪";
    isAlive = false;
  }

  startMessage.textContent = message;
}

// New card function
function newCard() {

  if (isAlive === true && hasBlackJack === false) {
    let thirdCard = getRandomCard();
    sum += thirdCard;
    cards.push(thirdCard);
    renderGame();
  }
  
}

// ****************************************************