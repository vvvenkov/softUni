import { getAll } from "../api/itemsApi.js";
import { render, html } from "../lib/lit-html.js";

const template = (items) => html`
      <h3 class="heading">Market</h3>
        <section id="dashboard">
        ${items.map(item => html`
            <div class="item">
          <img src="${item.imageUrl}" alt="${item.item}" />
          <h3 class="model">${item.item}</h3>
          <div class="item-info">
            <p class="price">Price: ${item.price}</p>
            <p class="availability">${item.availability}</p>
            <p class="type">Type: ${item.type}</p>
          </div>
          <a class="details-btn" href="/dashboard/${item._id}/details">Uncover More</a>
        </div>
        `)}
        </section>
        ${items.length === 0
        ? html`<h3 class="empty">No Items Yet`
        : ''
    }
`;

export default async function dashboardView(ctx) {
    const items = await getAll();

    render(template(items));
}