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

// When user clicks upload redirect to the upload options
const uploadRedirect = async function(event) {
  event.preventDefault();

  fetch("/api/upload/", {
    method: "GET"
  })
  .then(document.location.replace("/api/upload"));
};

// When user clicks create redirect to the create options
const createRedirect = async function(event) {
  event.preventDefault();

  fetch("/api/upload/createGif", {
    method: "GET"
  })
  .then(document.location.replace("/api/upload/createGif"));
};

// Event Listener for signup button
  document
    .querySelector("#signup-btn")
    .addEventListener("click", signUpRedirect);

// Event Listener for Login Button
  document
    .querySelector("#login-btn")
    .addEventListener("click", loginRedirect);

// Event Listener for upload button
document
.querySelector("#upload-btn")
.addEventListener("click", uploadRedirect);

// Event Listener for create Button
document
.querySelector("#creation-btn")
.addEventListener("click", createRedirect);