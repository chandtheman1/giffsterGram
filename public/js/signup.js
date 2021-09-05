const signupFormHandler =  function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector("#username-input-signup");
    const passwordEl = document.querySelector("#password-input-signup");
    const emailEl = document.querySelector("#email-input-signup");
    console.log(usernameEl.value,passwordEl.value,emailEl.value);
    fetch("/api/user", {
      method: "post",
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value,
        email: emailEl.value,
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(function() {
        document.location.replace("/gifs"); // <------ needs to be updated
      })
      .catch(err => console.log(err));
  };
  
  // When user clicks login redirect to the login options
const loginRedirect = function(event) {
  event.preventDefault();

  fetch("/api/user/login", {
    method: "GET"
  })
  .then(document.location.replace("/api/user/login"));
};

// Event Listener for Signup FORM submission
  document
    .querySelector("#signup-form1")
    .addEventListener("submit", signupFormHandler);

  // Event Listener for Login Button
  document
    .querySelector("#login-btn")
    .addEventListener("click", loginRedirect);