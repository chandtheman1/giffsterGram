  // When user clicks create redirect to the create options
  const createRedirect = async function(event) {
    event.preventDefault();
    
    fetch("/api/upload/createGif", {
      method: "GET"
    })
    .then(document.location.replace("/api/upload/createGif"));
    };
    // Event Listener for create Button
document
.querySelector("#creation-btn")
.addEventListener("click", createRedirect);