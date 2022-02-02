const getSleepHours = (day) => {
  day.toLowerCase();

  switch (day) {
    case 'monday':
      return 8;
    case 'tuesday':
      return 5;
    case 'wednesday':
      return 7;
    case 'thursday':
      return 9;
    case 'friday':
      return 3;
    case 'saturday':
      return 10;
    case 'sunday':
      return 9;
  }
};

// console.log(getSleepHours('friday'));
// console.log(getSleepHours('tuesday'));
// console.log(getSleepHours('sunday'));

const getActualSleepHours = () => {
  return (
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday')
  );
};

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log(`Perfect amount of sleep (${actualSleepHours} hours)`);
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `You Sleep (${
        actualSleepHours - idealSleepHours
      }, hours) hours MORE than you need`
    );
  } else {
    console.log(
      `You need sleep MORE (${
        idealSleepHours - actualSleepHours
      } hours), Please!`
    );
  }
};

// Test
calculateSleepDebt();
calculateSleepDebt();
calculateSleepDebt();
