import { endPoints } from "./app.js";
import { onHome } from "./homePage.js";

document.querySelector('a').addEventListener('click', onHome); 

export function postDetail(post) {
    loadComments()
    const mainRef = document.querySelector('main');
    mainRef.innerHTML = '';

    const div = document.createElement('div');
    const commentDiv = document.createElement('div');
    commentDiv.classList = 'answer-comment';

    div.innerHTML = `
        <div class = "comment">
        <div class="header">
        <img src="./static/profile.png" alt="avatar">
        <p><span>${post.username}</span> posted on <time>${post.date}</time></p>
        
        <p class="post-content">${post.postContent}</p>

        <div class="comments">
        </div>
        `;
    commentDiv.innerHTML = `
        <p><span>currentUser</span> comment:</p>
        <div class="answer">
        <form>
        <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
        <div>
        <label for="username">Username <span class="red">*</span></label>
        <input type="text" name="username" id="username">
        </div>
        <button>Post</button>
        </form>
        </div>
        </div >`
    mainRef.appendChild(div);
    mainRef.appendChild(commentDiv)
    document.querySelector('button').addEventListener('click', onComment);
}

export async function onComment(ev) {
    ev.preventDefault();
    const commentContent = document.querySelector('#comment');
    const commentor = document.querySelector('#username');

    const data = {
        comment: commentContent.value,
        commentor: commentor.value,
        date: new Date
    }

    if (!data.comment || !data.commentor) {
        return;
    }

    await fetch(endPoints.comments, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    commentContent.value = '';
    commentor.value = '';
    loadComments();
}

export async function loadComments() {
    const response = await fetch(endPoints.comments);
    const data = await response.json();

    document.querySelector('.comments').innerHTML = '';

    Object.values(data).forEach(el => {
        const div = document.createElement('div');

        div.innerHTML = `
        <div id="user-comment">
        <div class="topic-name-wrapper">
        <div class="topic-name">
        <p><strong>${el.commentor}</strong> commented on <time>${el.date}</time></p>
        <div class="post-content">
        <p>${el.comment}.</p>
        </div>
        </div>
        </div>
        </div>`
        document.querySelector('.comments').appendChild(div);
    })
};