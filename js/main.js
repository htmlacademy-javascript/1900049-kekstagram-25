
/* Task 1 */
const getRand = (min, max) => {
  if (min > max) {
    return;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
};

getRand(2, 5);

/* Task 2 */

const getStringLength = (str, maxLength) => str.length <= maxLength;
const strParam = 'sgsdfgsdfgsdfgsfg';
const maxLengthParam = 20;
getStringLength(strParam, maxLengthParam);
