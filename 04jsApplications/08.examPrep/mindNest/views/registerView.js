import { render, html } from "../lib/lit-html.js";
import { register } from "../api/usersApi.js";
import page from "../lib/page.js";
import { saveUserData } from "../utils/userUtils.js";

const template = (onSubmit) => html`
      <section id="register">
        <div class="form">
          <h2>Register</h2>
          <form @submit =${onSubmit} class="register-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="#">Login</a></p>
          </form>
        </div>
      </section>
`;


export default async function registerView(ctx) {

	render(template(registerFormSubmitHandler.bind(ctx)));
}

async function registerFormSubmitHandler(e) {
	e.preventDefault();

	//Get form data
	const formData = new FormData(e.currentTarget);
	const email = formData.get('email');
	const password = formData.get('password');
	const rePassword = formData.get('re-password');

	//Validation
	if (email === '' || password === '' || rePassword === '') {
		return alert('Fields are required');
	}
	if (password !== rePassword) {
		// return this.showNotification('Passwords don\'t match');
        return alert('Passwords don\'t match');
	}

	//Error handling
	try {
		//create request 
		const userData = await register(email, password);

		//save user data 
		saveUserData(userData);

		//redirect to homepage
		page.redirect('/');
	} catch (error) {
		alert(error.message);
	}
}