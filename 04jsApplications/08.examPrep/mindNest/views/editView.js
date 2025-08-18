import { render, html } from "../lib/lit-html.js";
import { getOne } from "../api/itemsApi.js";
import { edit } from "../api/itemsApi.js";
import page from "../lib/page.js";

const template = (item, onSubmit) => html`
  <section id="edit">
    <div class="form form-item">
      <h2>Edit Your Item</h2>
      <form @submit=${onSubmit} class="edit-form">
        <input type="text" value=${item.title} name="title" id="title" placeholder="Title" />
        <input type="text" value=${item.imageUrl} name="imageUrl" id="imageUrl" placeholder="Image URL" />
        <input type="text" value=${item.type} name="type" id="type" placeholder="Type" />
        <select name="difficulty" id="difficulty">
          <option value="" disabled>Difficulty</option>
          <option value="Easy" ${item.difficulty === 'Easy' ? 'selected' : ''}>Easy</option>
          <option value="Medium" ${item.difficulty === 'Medium' ? 'selected' : ''}>Medium</option>
          <option value="Hard" ${item.difficulty === 'Hard' ? 'selected' : ''}>Hard</option>
        </select>
        <textarea id="description" name="description" placeholder="Description" rows="2" cols="50">${item.description}</textarea>
        <button type="submit">Edit</button>
      </form>
    </div>
  </section>
`;

export default async function editView(ctx) {
  const itemId = ctx.params.itemId;
  const item = await getOne(itemId);

  render(template(item, editFormSubmitHandler.bind(ctx)));
}

async function editFormSubmitHandler(e) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData);
  const itemId = this.params.itemId;

  if (!Object.values(data).every(value => !!value)) {
    return alert('All fields are required!');
  }

  console.log(data)

  try {
    await edit(itemId, data);

    page.redirect(`/dashboard/${itemId}/details`)
  } catch (err) {
    alert(err.message);
  }

}