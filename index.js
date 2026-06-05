let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber >= 0.33 && randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Please input your choice:");
}

function playRound(humanChoice, computerChoice) {
  let humanChoiceIn = humanChoice.toLowerCase();
  let computerChoiceIn = computerChoice.toLowerCase();

  if (humanChoiceIn === "rock" && computerChoiceIn === "rock") {
    console.log("human's rock = computer's rock");
  } else if (humanChoiceIn === "rock" && computerChoiceIn === "paper") {
    console.log("human's rock > computer's paper");
    humanScore++;
  } else if (humanChoiceIn === "rock" && computerChoiceIn === "scissors") {
    console.log("human's rock < computer's scissors");
    computerScore++;
  } else if (humanChoiceIn === "paper" && computerChoiceIn === "rock") {
    console.log("human's paper < computer's rock");
    computerScore++;
  } else if (humanChoiceIn === "paper" && computerChoiceIn === "paper") {
    console.log("human's paper = computer's paper");
  } else if (humanChoiceIn === "paper" && computerChoiceIn === "scissors") {
    console.log("human's paper > computer's scissors");
    humanScore++;
  } else if (humanChoiceIn === "scissors" && computerChoiceIn === "rock") {
    console.log("human's scissors > computer's rock");
    humanScore++;
  } else if (humanChoiceIn === "scissors" && computerChoiceIn === "paper") {
    console.log("human's scissors < computer's paper");
    computerScore++;
  } else if (humanChoiceIn === "scissors" && computerChoiceIn === "scissors") {
    console.log("human's scissors = computer's scissors");
  }
}

function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
}

playGame();
