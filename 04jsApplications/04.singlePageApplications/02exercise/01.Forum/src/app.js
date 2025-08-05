export const endPoints = {
    posts: 'http://localhost:3030/jsonstore/collections/myboard/posts',
    comments: 'http://localhost:3030/jsonstore/collections/myboard/comments'
}

import { onHome, onPost, onCancel } from "./homePage.js"

onHome();

document.querySelector('.public').addEventListener('click', onPost);

document.querySelector('.cancel').addEventListener('click', onCancel);

