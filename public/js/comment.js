
const commentFormHandler = async function(event) {
    event.preventDefault();
  
    const gif_id = document.querySelector('input[name="gif-id"]').value;
    const comment_text = document.querySelector('textarea[name="comment-body"]').value;
  
    if (body) {
      await fetch('/home/comment/'+ gif_id, {
        method: 'POST',
        body: JSON.stringify({
          comment_text
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      document.location.reload();
    }
  };
  
  document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);