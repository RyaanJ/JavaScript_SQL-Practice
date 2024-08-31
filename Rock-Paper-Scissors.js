const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error");
  }
};

function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3);
  if (compChoice === 0) {
    return "rock";
  } else if (compChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Tie Game";
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    return "User Won";
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    return "User Won";
  } else if (userChoice === "paper" && computerChoice === "rock") {
    return "User Won";
  } else if (userChoice === "rock" && computerChoice === "paper") {
    return "Computer Won";
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    return "Computer Won";
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    return "Computer Won";
  } else {
    return "Error in Spelling, Try Again";
  }
}

function playGame() {
  let userChoice = getUserChoice("rock");
  let computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
