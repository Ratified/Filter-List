const characters = document.getElementById('characters')
const limit = 10
fetch('https://hp-api.onrender.com/api/characters')
.then(res => res.json())
.then((data) => {
    const limitedData = data.slice(0, limit);
    limitedData.forEach((char) => {
        const character = document.createElement('div');
        character.classList.add('character');   
        const {name, house, image, gender} = char
        character.innerHTML = `
            <div class="name-house">
                <p class="name">${name}</p>
                <p class="house">${house}</p>
                <p class="gender">${gender}</p>
            </div>
            <img src="${image}" alt="Character's Image" class="img">
        `
        characters.append(character)
    })
}) .catch((err) => console.log(err))

const search = document.getElementById('search')
search.addEventListener('keyup', (e) => {
    const searchItem = e.target.value.toLowerCase()
    const allCharacters = document.querySelectorAll('.character')
    allCharacters.forEach((char) => {
        const name = char.querySelector('.name').innerText.toLowerCase()
        const house = char.querySelector('.house').innerText.toLowerCase()
        const gender = char.querySelector('.gender').innerText.toLowerCase()

        if(name.includes(searchItem) || house.includes(searchItem) || gender.includes(searchItem)){
            char.style.display = 'flex'
        } else {
            char.style.display = 'none'
        }
    })
})