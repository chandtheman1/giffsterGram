
const commentFormHandler = async function (event) {
  event.preventDefault();

  const gif_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const comment_text = document.querySelector('#comment-text').value.trim();

  if (!comment_text) {
    alert("you must add a comment")
  } else {
    const response = await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        gif_id,
        comment_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }

};

document
  .querySelector('.new-comment-form')
  .addEventListener('click', commentFormHandler);