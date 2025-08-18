import { render, html } from "../lib/lit-html.js";
import { create } from "../api/itemsApi.js";
import page from "../lib/page.js";

const template = (onSubmit) => html`
      <section id="create">
        <div class="form form-item">
          <h2>Share Your Tip</h2>
          <form @submit=${onSubmit} class="create-form">
            <input type="text" name="title" id="title" placeholder="Title" />
            <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" />
            <input type="text" name="type" id="type" placeholder="Type" />
            <select name="difficulty" id="difficulty">
              <option value="" disabled selected>Difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="50"></textarea>
            <button type="submit">Add</button>
          </form>
        </div>
      </section>
`;

export default async function createView(ctx) {
    render(template(createFormSubmitHandler));
}

async function createFormSubmitHandler(e) {
    e.preventDefault();

    //Get form data
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    //Validate empty fields
    if (!Object.values(data).every(value => !!value)) {  //check if every value is truthy
        return alert('All fields are required!')
    };

    //Make post request
    try {
        await create(data);

        page.redirect('/dashboard')
    } catch (err) {
        alert(err.message);
    }

};