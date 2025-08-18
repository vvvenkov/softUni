import { render, html } from "../lib/lit-html.js";
import { getOne } from "../api/itemsApi.js";
import { getUserData } from "../utils/userUtils.js";


const template = (item, isOwner) => html`
     <section id="details">
        <div id="details-wrapper">
          <div>
            <img id="details-img" src="${item.imageUrl}" alt=${item.title} />
            <p id="details-title">${item.title}</p>
          </div>
          <div id="info-wrapper">
            <div id="details-description">
              <p class="details-type">Type: ${item.type}</p>
              <p class="details-difficulty"> Difficulty: ${item.difficulty}</p>
              <p id="tip-description">${item.description}</p>
            </div>
            ${isOwner
    ? html`
			<div id = "action-buttons" >
			<a href="/dashboard/${item._id}/edit" id="edit-btn">Edit</a>
			<a href="/dashboard/${item._id}/delete" id="delete-btn">Delete</a>
			</div >`
    : ''
  }  
          </div>
        </div>
      </section>
`;


export default async function detailsView(ctx) {
  const itemId = ctx.params.itemId;
  const item = await getOne(itemId);

  const userData = getUserData();
  const isOwner = userData._id === item._ownerId;



  render(template(item, isOwner));
}