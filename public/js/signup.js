const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector("#username-input-signup");
    const passwordEl = document.querySelector("#password-input-signup");
    fetch("/api/user", {
      method: "post",
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(function() {
        document.location.replace("/thread"); // <------ needs to be updated
      })
      .catch(err => console.log(err));
  };
  
  // When user clicks login redirect to the login options
const loginRedirect = async function(event) {
  event.preventDefault();

  fetch("/api/user/login", {
    method: "GET"
  })
  .then(document.location.replace("/api/user/login"));
};

// Event Listener for Signup FORM submission
  document
    .querySelector("#signup-form")
    .addEventListener("submit", signupFormHandler);

  // Event Listener for Login Button
  document
    .querySelector("#login-btn")
    .addEventListener("click", loginRedirect);