const url = window.location.search
const urlParams = new URLSearchParams(url)
const id = urlParams.get('id')
const urlAPI = "https://rickandmortyapi.com/api" 

fetch(urlAPI + "/location/" + id)  
    .then(response => response.json())
    .then(location => {
    const locationTemplates = `
        <div id="location">
            <div class="detail">
                <h1>${location.name}</h1>
                <h2 class="gray">type:</h2>
                <p>${location.type}</p>
                <h2 class="gray">dimension:</h2>
                <p>${location.dimension}</p>
                <h2 class="gray">url:</h2>
                <p>${location.url}</p>
            </div>
        </div>`
    locationContainer.innerHTML += locationTemplates
    })
    