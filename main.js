const URL = 'https://pokeapi.co/api/v2/pokemon/';

const search_input = document.getElementById('search');
const pokedex_container = document.getElementById('pokedex');

async function searchPokemon(){
    const searched_pokemon = search_input.value.toLowerCase();
    try {
        const response = await fetch(URL + searched_pokemon)
        const data = await response.json();

        pokedex_container.innerHTML = 
        `
        <h2>${data.name.toUpperCase()}</h2>
        <img src = "${data.sprites.front_default}">
        <p>Numero: ${data.id} </p>
        <p>Altura: ${data.height / 10} metros</p>
        <p>Peso: ${data.weight / 10} kgs</p>
        `;
    } catch (error) {
        console.error(error);
    }
};

document.getElementById("btn_search").addEventListener("click",searchPokemon);