const currentAge = Number(prompt("Please enter your current age"));
const retirementAge = Number(prompt("Please enter your current Age"));
const year = new Date().getFullYear();

if (
  typeof currentAge !== "number" ||
  typeof retirementAge !== "number" ||
  currentAge === "" ||
  retirementAge === ""
)
  alert("Please enter a valid age");

console.log(
  `You have ${
    retirementAge - currentAge
  } years left until you can retire. It's ${year}, so you can retire in ${
    Number(year) + (retirementAge - currentAge)
  }.`
);
