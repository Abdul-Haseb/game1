const choices = ["rock", "paper", "scissors"];
const result = document.querySelector("#result");

let humanScore = 0;
let computerScore = 0;

// The function which extract computer random value

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

//This function will get the User value  and make sure it matchs the array we have

const getUserChoice = () => {
  let userVal;
  do {
    userVal = prompt("Please enter rock, paper, or scissors:").toLowerCase();
    if (!choices.includes(userVal)) {
      alert("Invalid choice. Please enter rock, paper, or scissors.");
    }
  } while (!choices.includes(userVal));
  return userVal;
};

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    return "Its a tie!";
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You win ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
};

const PlayGame = () => {
  for (let i = 0; i < 5; i++) {
    const userSelection = getUserChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(userSelection, computerSelection));
    console.log(`Score: Human ${humanScore} , computer ${computerScore}`);
  }

  let finalResult;
  if (humanScore > computerScore) {
    finalResult = `Congratulations , You won the game`;
  } else if (computerScore > humanScore) {
    console.log("You lose! computer won the game");
  } else {
    finalResult = "The game is tie!";
  }

  result.innerHTML = `${finalResult}`;
};

PlayGame();
