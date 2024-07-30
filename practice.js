// game.js

let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");

const getComputerChoice = () => {
  let choices = ["rock", "paper", "scissors"];

  let randomIndex = Math.floor(Math.random() * choices.length);

  return choices[randomIndex];
};

const playRound = (playerSelection) => {
  let result;
  const computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    result = `Its a ties player score:  ${playerScore} , computer score : ${computerScore} `;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = `You win ${playerSelection} beats ${computerSelection} `;
    playerScore++;
  } else {
    result = `You lose, ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  }
  resultsDiv.textContent = result;
  scoreDiv.textContent = `Player Score = ${playerScore} , computer Score = ${computerScore}`;

  if (playerScore === 5) {
    scoreDiv.textContent += "You wind the game!";
    resetTheGame();
  } else if (computerScore === 5) {
    scoreDiv.textContent += "Computer win the game";
    resetTheGame();
  }
};

const resetTheGame = () => {
  playerScore = 0;
  computerScore = 0;
};

const choiceClicked = (choice) => {
  playRound(choice);
};
rock.addEventListener("click", () => choiceClicked("rock"));
paper.addEventListener("click", () => choiceClicked("paper"));
scissors.addEventListener("click", () => choiceClicked("scissors"));
