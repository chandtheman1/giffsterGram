const loginFormHandler = function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector("#username-input-login");
    const passwordEl = document.querySelector("#password-input-login");
    fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(function() {
        document.location.replace("/gifs");  // <-------- Needs to be updated
      })
      .catch(err => console.log(err));
  };

// When user clicks signup redirect to the signup options
const signUpRedirect = function(event) {
  event.preventDefault();

  fetch("/api/user/signup", {
    method: "GET"
  })
  .then(document.location.replace("/api/user/signup"));
};

  // Event Listener for login FORM submission
  document
    .querySelector("#login-form1")
    .addEventListener("submit", loginFormHandler);

  // Event Listener for signup button
  document
    .querySelector("#signup-btn")
    .addEventListener("click", signUpRedirect);