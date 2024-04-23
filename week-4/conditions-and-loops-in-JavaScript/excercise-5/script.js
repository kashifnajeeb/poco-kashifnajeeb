const number = prompt("Please enter a number between 0 and 10");

function multiplyByNine(num) {
  if (num < 0 || num > 10) {
    alert("Please enter a number between 0 and 10");
    return location.reload();
  }

  const result = num * 9;

  return `${num} * 9 = ${result}`;
}

console.log(multiplyByNine(number));
