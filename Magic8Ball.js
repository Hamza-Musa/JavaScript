userName = "Hamza";

userName ? console.log(`Hello ${userName}`) : console.log("Hello!");

const userQuestion = "Will I be able to watch the football today?";

console.log(userName + " has asked: " + userQuestion);

let randomNumber = Math.floor(Math.random() * 8);

console.log(randomNumber);

let eightBall = "";

if (randomNumber == 0) {
  eightBall = "It is certain";
} else if (randomNumber == 1) {
  eightBall = "It is decidedly so";
} else if (randomNumber == 2) {
  eightBall = "Reply hazy try again";
} else if (randomNumber == 3) {
  console.log("Cannot predict now");
} else if (randomNumber == 4) {
  eightBall = "Do not count on it";
} else if (randomNumber == 5) {
  eightBall = "My sources say no";
} else if (randomNumber == 6) {
  eightBall = "Outlook not so good";
} else if (randomNumber == 7) {
  eightBall = "Signs point to yes";
} else {
  console.log("error");
}

console.log(eightBall);
