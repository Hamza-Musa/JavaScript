//H age
const myAge = 23;
//changable
let earlyYears = 2;
earlyYears *= 10.5;
//changable
let laterYears = myAge - 2;
//calculate the number of dog years accounted for by your later years.
laterYears *= 4;

//console.log(earlyYears, laterYears);

//adding both early and later
const myAgeInDogYears = earlyYears + laterYears;

//myname in lowercase
myName = "Hamza".toLowerCase();
//console.log(myName);
//Putting all together
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
