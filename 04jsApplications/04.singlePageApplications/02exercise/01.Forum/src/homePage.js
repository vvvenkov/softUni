import { endPoints } from "./app.js";
import { postDetail } from "./postAndCommentPage.js";

const titleInputRef = document.querySelector('#topicName');
const usernameRef = document.querySelector('#username');
const postContentRef = document.querySelector('#postText');

export async function onHome() {
    const response = await fetch(endPoints.posts)
    const data = await response.json(response);

    document.querySelector('.topic-container').innerHTML = "";

    Object.values(data).forEach(el => {
        const div = document.createElement('div');
        div.classList = 'topic-container'

        div.innerHTML = `npm install mocha --save-dev
                <div class="topic-name-wrapper">
                    <div class="topic-name">
                        <a href="#" class="normal" id="postDetails">
                            <h2>${el.title}</h2>
                        </a>
                        <div class="columns">
                            <div>
                                <p>Date: <time>${el.date}</time></p>
                                <div class="nick-name">
                                    <p>Username: <span>${el.username}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;

        div.querySelector('#postDetails').addEventListener('click', () => postDetail(el));
        document.querySelector('main').appendChild(div);
    });
};

export async function onPost(ev) {
    ev.preventDefault();

    const title = titleInputRef.value
    const username = usernameRef.value
    const postContent = postContentRef.value;
    const date = new Date;

    if (!title || !username || !postContent) {
        return;
    }

    await fetch(endPoints.posts, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, username, postContent, date })
    });

    onHome();
    titleInputRef.value = '';
    usernameRef.value = '';
    postContentRef.value = '';
}

export function onCancel() {
    titleInputRef.value = '';
    usernameRef.value = '';
    postContentRef.value = '';
}
