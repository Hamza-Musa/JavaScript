const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 6;
      break;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 7;
      break;
    case "thursday":
      return 8;
      break;
    case "friday":
      return 9;
      break;
    case "saturday":
      return 10;
      break;
    case "sunday":
      return 8;
      break;
    default:
      console.log("Error");
  }
};

//console.log(getSleepHours("sunday")); // should print the # hours assigned to tuesday

const getActualSleepHours = () => {
  const totalHours =
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");
  return totalHours;
};

const getIdealSleepHours = (idealHours) => idealHours * 7;

//console.log(getActualSleepHours());
//console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);

  const SleepDebt = idealSleepHours - actualSleepHours;
  //console.log(SleepDebt);
  let time = "";
  const SleepHourFunction = () => {
    if (SleepDebt > 1) {
      return (time = "hours");
    } else if (SleepDebt === 1 || SleepDebt === -1) {
      return (time = "hour");
    } else if (SleepDebt < 1) {
      return (time = "hours");
    } else {
      return "error";
    }
  };
  SleepHourFunction();

  if (actualSleepHours == idealSleepHours) {
    console.log("You got the perfect amount of sleep. Keep it up!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "You got more sleep than neccessary. You are over by " +
        -SleepDebt +
        " " +
        time +
        "."
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      "You need more sleep, get some rest. You are under by " +
        SleepDebt +
        " " +
        time +
        "."
    );
  } else {
    console.log("Error");
  }
};

calculateSleepDebt();
