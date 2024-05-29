const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function isValidEmail(email) {
  return emailPattern.test(email);
}
userDataForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  const email = emailInput.value;
  console.log("email : ", isValidEmail(email));
  if (isValidEmail(email)===true) {
    console.log("your email has been verified!");
  }else{
    console.log("your email is not verified!");
  }
});
