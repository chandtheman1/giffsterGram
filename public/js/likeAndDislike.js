const likeEl = document.querySelector('#upvote-btn');
const dislikeEl = document.querySelector('#downvote-btn');

const gif_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

// upvote button
likeEl.addEventListener('click', async function () {
    const response = await fetch(`/api/gif/${gif_id}/upvote`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.reload();
    }
});
//downvote button
dislikeEl.addEventListener('click', async function () {
    const response = await fetch(`/api/gif/${gif_id}/downvote`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.reload();
    }
});

// Changes the color based on value
const counterEl = document.querySelector('.counter-icon');
const number = Number(counterEl.innerHTML);

if (number > 0) {
    counterEl.setAttribute('class', 'counter-icon green');
} else if (number == 0) {
    counterEl.setAttribute('class', 'counter-icon');
} else {
    counterEl.setAttribute('class', 'counter-icon red');
}