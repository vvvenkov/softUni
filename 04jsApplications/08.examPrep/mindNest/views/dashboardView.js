import { getAll } from "../api/itemsApi.js";
import { render, html } from "../lib/lit-html.js";

const template = (items) => html`<section id="details">
        <h3 class="heading">Mindful Tips</h3>
      <section id="tips-dashboard">
      ${items.map(item => html`
        <div class="tip">
        <img src="${item.imageUrl}" alt="${item.title}" />
        <h3 class="title">${item.title}</h3>
        <div class="tip-info">
        <p class="type">Type: ${item.type}</p>
        <p class="difficulty">Difficulty: ${item.difficulty}</p>
        </div>
        <a class="details-btn" href="/dashboard/${item._id}/details">View Tip</a>
        </div>
        `)}
        </section>
        ${items.length === 0
        ? html`<h3 class="empty">No Mindful Tips Added Yet.</h3>`
        : ''
        }
            `;


export default async function dashboardView(ctx) {
    const items = await getAll();

    render(template(items));
}