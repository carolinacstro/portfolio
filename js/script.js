// arquivo js

function getRepos() {
    fetch('https://api.github.com/users/carolinacstro/repos', {method: 'GET'}).then(response => {
        response.json().then(data => {renderRepos(data)})
    })
}

getRepos();

function renderRepos(repositories) {
    document.getElementById('project-cards').innerHTML = repositories.filter(repo => repo.name === 'portfolio' ? '' : repo.name).map(repo => 
        `<a class="projects__card" target="_blank" href="${repo.html_url}">
            <div class="card">
                <h3 class="card__title">${repo.name.replaceAll("-", " ").replaceAll("_", " ")}</h3>
                <p class="card__description">${repo.description}</p>
                <div class="div__topics"><p class="tags__topics">${repo.topics.join(' ')}</p></div>
            </div>
        </a>`).join('')
}

renderRepos();
