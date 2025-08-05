import { render, html } from "../lib/lit-html.js";
import { saveUserData } from '../utils/userUtils.js';
import { login } from "../api/usersApi.js";
import page from "../lib/page.js";

const template = (onSubmit) => html`
      <section id="login">
        <div class="form">
          <h2>Login</h2>
          <form @submit=${onSubmit}class="login-form">
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">Not registered? <a href="/register">Create an account</a></p>
          </form>
        </div>
     </section>
`;

export default async function loginView(ctx) {
	//TODO: Implement this view

	render(template(loginFormSubmiteHandler));
}

async function loginFormSubmiteHandler(e) {
	e.preventDefault()

	const formData = new FormData(e.currentTarget);
	const email = formData.get('email');
	const password = formData.get('password');

	if (email === '' || password === '') {
		return alert('Fields are required!');
	}

	try {
		const userData = await login(email, password);
		saveUserData(userData);
		page.redirect('/');
	} catch (err) {
		alert(err.message);
	}
}



