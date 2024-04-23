const dateForm = document.getElementById("ageCalculatorForm");
const birthDate = document.getElementById("dateOfBirth");
const comparisonDate = document.getElementById("comparisonDate");

dateForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const birth = new Date(birthDate.value);
  const future = new Date(comparisonDate.value);

  let age = future.getFullYear() - birth.getFullYear();

  if (
    future.getMonth() < birth.getMonth() ||
    (future.getMonth() === birth.getMonth() &&
      future.getDate() < birth.getDate())
  ) {
    age--;
  }

  console.log(`You will be ${age} years old.`);
});
