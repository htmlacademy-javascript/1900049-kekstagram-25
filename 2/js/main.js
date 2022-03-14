
/* Task 1 */
let getRand = (min, max) => {
  if (min > max) {
    return;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
};

getRand(2, 5);

/* Task 2 */

let getStringLength = (str, maxLength) => str.length <= maxLength;
let str = "sgsdfgsdfgsdfgsfg";
let maxLength = 20;

console.log(getStringLength(str, maxLength));
