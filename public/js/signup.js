const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const username = document.querySelector("#username-input-signup").value.trim();
    const password = document.querySelector("#password-input-signup").value.trim();
    const email = document.querySelector("#email-input-signup").value.trim();
    console.log(username,password,email);

    if(username && password && email){

      const response = await fetch("/api/user", {
        method: "post",
        body: JSON.stringify({
          username: username,
          password: password,
          email: email,
        }),
        headers: { "Content-Type": "application/json" }
      });

        if(response.ok) {
          // If successful, redirect the browser to the gifs page
          document.location.replace('/gifs');
        } else {
          alert(response.statusText);
        }
    }
  
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