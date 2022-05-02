// arquivo js

// function typeWriter(elemento) {
//     const textoArray = elemento.innerHTML.split('');
//     elemento.innerHTML = '';
//     textoArray.forEach((letra, i) => {
//         setTimeout(function() {
//             elemento.innerHTML += letra; 
//         }, 150 * i)
//     });
// }

// const titulo = document.querySelector('h1');
// typeWriter(titulo);

function getRepos() {
    fetch('https://api.github.com/users/carolinacstro/repos', {method: 'GET'}).then(response => {
        response.json().then(data => {renderRepos(data)})
    })
}

getRepos();

function renderRepos(repositories) {
    document.getElementById('project-cards').innerHTML = repositories.filter(repo => repo.name === 'carolinacstro' ? '' : repo.name).map(repo => 
        `<a class="projects__card" target="_blank" href="${repo.html_url}">
            <div class="card">
                <h3 class="card__title">${repo.name.replaceAll("-", " ").replaceAll("_", " ")}</h3>
                <p class="card__description">${repo.description}</p>
                <p> Tópicos do projeto: ${repo.topics.join(', ')}</p>
            </div>
        </a>`).join('')
}

renderRepos();

// function getImages(value) {

//     const languages = ;

//     switch (lenguages) {
//         case "HTML":
//             image = '<img src="http://smallbeerpress.com/wp-content.png"></img>';
//         case "CSS":
//         case "Javascript":
//         case "Ruby":
//         case "Python":
//         default:
//             break
//     }

//     console.log(languages);
// }

// getImages();
