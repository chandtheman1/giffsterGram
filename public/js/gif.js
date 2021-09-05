const newGifHandler = async function(event) {
    event.preventDefault();
  
    const name = document.querySelector('input[name="gif-name"]').value;
    const imageData = document.querySelector('input[name="gif-image"]').value;
    const like = document.querySelector('input[name="gif-like"]').value;
    const dislike = document.querySelector('textarea[name="gif-dislike"]').value;
  
   
    await fetch(`/api/gif`, {
      method: "POST",
      body: JSON.stringify({
        name,
        imageData,
        like,
        dislike
      }),
      headers: {
        "Content-Type": "application/json",
       
      }
    });
  
    document.location.replace("/");
  };
  
  document
    .querySelector("#new-gif-form")
    .addEventListener("submit", newGifHandler);



    const editGifFormHandler = async function(event) {
      event.preventDefault();
  
        
    const name = document.querySelector('input[name="gif-name"]').value;
      const like = document.querySelector('input[name="gif-like"]').value;
      const dislike = document.querySelector('textarea[name="gif-dislike"]').value;
      const gif_id = document.querySelector('input[name="gif-id"]').value;
    
  
      fetch("/api/gif/" + gif_id, {
          method: "put", 
          body: JSON.stringify({
              name,
              like,
              dislike
          }),
          headers: { "Content-Type": "application/json"}
      })
          .then(function() {
              document.location.replace("/");
          })
          .catch(err => console.log(err))
  }
  
  document.querySelector("#edit-Gif-form").addEventListener("submit", editGifFormHandler);
  
  