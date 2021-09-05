// When user clicks signup redirect to the signup options
const signUpRedirect = async function(event) {
  event.preventDefault();

  fetch("/api/user/signup", {
    method: "GET"
  })
  .then(document.location.replace("/api/user/signup"));
};

// When user clicks login redirect to the login options
const loginRedirect = async function(event) {
  event.preventDefault();

  fetch("/api/user/login", {
    method: "GET"
  })
  .then(document.location.replace("/api/user/login"));
};


// Event Listener for signup button
document
  .querySelector("#signup-btn")
  .addEventListener("click", signUpRedirect);

// Event Listener for Login Button
document
  .querySelector("#login-btn")
  .addEventListener("click", loginRedirect);

