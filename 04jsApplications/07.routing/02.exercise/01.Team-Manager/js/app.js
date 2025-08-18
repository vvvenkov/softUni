import page from '../node_modules/page/page.mjs';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import { get, post, put, del } from './data/api.js';

page('/', () => render(html`<h1>HomePage</h1>`, document.querySelector('main')));
page('/teams', () => render(html`<h1>TeamsPage</h1>`, document.querySelector('main')));

page.start();

window.api = {
    get, post, put, del
}