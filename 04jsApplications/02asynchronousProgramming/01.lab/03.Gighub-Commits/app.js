async function loadCommits() {
    const baseUrl = "https://api.github.com/repos";

    const username = document.querySelector('#username');
    const repo = document.querySelector('#repo');
    const commits = document.querySelector('#commits');

    commits.innerHTML = "";

    try {
        const response = await fetch(`${baseUrl}/${username.value}/${repo.value}/commits`);

        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        Object.values(data).forEach(el => {
            const li = document.createElement('li');
            li.textContent = `${el.commit.author.name}${el.commit.message}`;

            commits.appendChild(li);
        });
    } catch (error) {
        const li = document.createElement('li');
        li.textContent = `Error: ${error.message}`;
        commits.appendChild(li);
    }







}