const loginFormHandler = async function(event) {
    event.preventDefault();
  
    const username = document.querySelector("#username-input-login").value.trim();
    const password = document.querySelector("#password-input-login").value.trim();

    if(username && password ){
   
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/gifs');
    } else {
      alert(response.statusText);
    }

    }    
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