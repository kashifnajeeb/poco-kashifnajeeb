const number = prompt("Please enter a number between 0 and 20");

function checkOddEven(num) {
  if (num < 0 || num > 20) {
    alert("Please enter a number between 0 and 20");
    return location.reload();
  }

  return num % 2 === 0 ? "Even" : "Odd";
}

console.log(checkOddEven(number));
