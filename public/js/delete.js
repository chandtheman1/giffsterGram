const deleteCommentHandler = async function(event) {

    event.preventDefault();
    const commentId = document.getElementById('comment-id').value;

    fetch("/api/comment/" + commentId, {
        method: "delete"
    })
    .then(function() {
        document.location.replace("/");
    })
    .catch(err => console.log(err))
}

document.querySelector("#delete-btn").addEventListener("click", deleteCommentHandler);