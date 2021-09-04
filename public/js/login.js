const loginFormHandler = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector("#username-input-login");
    const passwordEl = document.querySelector("#password-input-login");
    fetch("/api/user/login", {
      method: "post",
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(function() {
        document.location.replace("/thread");
      })
      .catch(err => console.log(err));
  };

// When user clicks signup redirect to the signup options
const signUpRedirect = async function(event) {
  event.preventDefault();

  fetch("/api/user/signup", {
    method: "GET"
  })
  .then(document.location.replace("/api/user/signup"));
};

  // Event Listener for login FORM submission
  document
    .querySelector("#login-form")
    .addEventListener("submit", loginFormHandler);

  // Event Listener for signup button
  document
    .querySelector("#signup-btn")
    .addEventListener("click", signUpRedirect);