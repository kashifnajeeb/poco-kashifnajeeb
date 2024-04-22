const birthYear = prompt("In which year were you born?");
const futureYear = prompt(
  "According to which year do you want to calculate your age?"
);

console.log(
  `I will be either ${futureYear - birthYear} or ${
    futureYear - birthYear - 1
  } in ${futureYear}.`
);
