console.log("hi");

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error.");
  }
};

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    return "paper";
  } else if (randomNumber == 1) {
    return "rock";
  } else if (randomNumber == 2) {
    return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice == "bomb") {
    if (
      computerChoice == "rock" ||
      computerChoice == "paper" ||
      computerChoice == "scissors"
    )
      return "You Win hehe";
  }
  if (userChoice == computerChoice) {
    return "Game is a tie";
  }
  if (userChoice == "rock") {
    if (computerChoice == "paper") {
      return "Computer wins";
    } else {
      return "Congrats you Win!";
    }
  }
  if (userChoice == "paper") {
    if (computerChoice == "scissors") {
      return "Computer wins";
    } else {
      return "Congrats you Win!";
    }
    if (userChoice == "scissors") {
      if (computerChoice == "rock") {
        return "Computer wins";
      } else {
        return "Congrats you Win!";
      }
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice("rock");
  const computerChoice = getComputerChoice();
  console.log(`You threw ... ${userChoice}!`);
  console.log(`The Computer throws... ${computerChoice}!`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
