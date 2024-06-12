const container = document.querySelector("#container")
const url = "https://rickandmortyapi.com/api"

fetch(url + "/character/")
    .then(response => response.json())
    .then(json => {
        const characters = json.results
        characters.forEach(character => {
            const characterTemplate = `
            <div class="character">
            <a href="character.html?id=${character.id}">
            <img src="${character.image}" alt="">
            <div class="character-detail">
                <h1>${character.name}</h1>
                <h2>${character.status}</h2>
                <a href="location.html?id=${character.id}">
                <p>Last known location:</p>
                <p>${character.location.name}</p>   
                <p>First seen in:</p>
                <p>${character.origin.name}</p>
            </div>
            </div>`    
            container.innerHTML += characterTemplate
        })
    })

//const container = document.querySelector("#container")
//container.style.backgroundColor = 'pink'