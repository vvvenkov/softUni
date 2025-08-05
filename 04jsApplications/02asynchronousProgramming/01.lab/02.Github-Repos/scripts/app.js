async function loadRepos() {
	const baseUrl = 'https://api.github.com/users';
	const username = document.querySelector('#username');;
	const repos = document.querySelector('#repos');

	repos.innerHTML = "";
	username.value = "";

	try {
		const response = await fetch(`${baseUrl}/${username.value}/repos`);

		if (!response.ok) {
			throw new Error(`${response.status} ${response.statusText}`);
		}
		const data = await response.json();

		Object.values(data).forEach(el => {
			const li = document.createElement('li');
			const a = document.createElement('a');

			a.href = el.html_url;
			a.textContent = el.full_name;

			li.appendChild(a);
			repos.appendChild(li);
		});
	} catch (error) {
		const li = document.createElement("li");
		li.textContent = error.message;
		repos.appendChild(li);
	};
}