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
    
    // Event Listener for upload button
document
.querySelector("#upload-btn")
.addEventListener("click", uploadRedirect);

// Event Listener for create Button
document
.querySelector("#creation-btn")
.addEventListener("click", createRedirect);