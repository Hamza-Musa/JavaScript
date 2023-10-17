let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;

const runnerAge = 16;

if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly) {
  console.log(
    "Your race commences at 9:30 am. Here is your race number: " +
      raceNumber +
      ". Don't be late! Have a good race!"
  );
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(
    "Late adutls. Your race will commence at 11:00 am. Here is your race number: " +
      raceNumber +
      ". Don't be late! Have a good race!"
  );
} else if (runnerAge < 18) {
  console.log(
    "Youth registrants. Your race will commence at 12:30 pm. Here is your race number: " +
      raceNumber +
      ". Don't be late! Have a good race!"
  );
} else {
  console.log("(18y/o) Go seek registration desk, first floor.");
}
