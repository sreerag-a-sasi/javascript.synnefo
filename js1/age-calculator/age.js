const container = document.getElementById("form");
const agedisplay = document.getElementById("agedisplay");
console.log("hello world!");

container.addEventListener("submit", function (event) {
  console.log("submit event fired");
  event.preventDefault(); // Prevent form submission

  const birthdateInput = document.getElementById("birthdate");
  const birthdate = new Date(birthdateInput.value);
  console.log(birthdate);
  const currentYear = new Date().getFullYear();
  console.log('currentyear : ',currentYear);

  // Calculate age
  const age = currentYear - birthdate.getFullYear();

  // Display the age
  agedisplay.textContent = `Your age is ${age} years.`;
});
