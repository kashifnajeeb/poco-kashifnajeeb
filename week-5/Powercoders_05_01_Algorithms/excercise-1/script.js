const num1 = 11;
const num2 = 12;

function checkBigger(num1, num2) {
  return num1 > num2
    ? `The greater number of ${num1} and ${num2} is ${num1}.`
    : `The smaller number of ${num1} and ${num2} is ${num1}."`;
}

console.log(checkBigger(num1, num2));
