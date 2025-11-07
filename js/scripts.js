/*********************************************
 * Exercise 1.5 – Display Pokémon in the DOM
 * Author: Enkeleda Mustafa
 *********************************************/

// 1) Pokémon data
const pokemonList = [
  { name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison'] },
  { name: 'Charmander', height: 0.6, types: ['fire'] },
  { name: 'Squirtle', height: 0.5, types: ['water'] },
  { name: 'Onix', height: 8.8, types: ['rock', 'ground'] }
];

// 2) Find the tallest Pokémon
let maxHeight = 0;
for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > maxHeight) {
    maxHeight = pokemonList[i].height;
  }
}

// 3) Get reference to the <section> in HTML
const pokemonSection = document.getElementById('pokemon-list');

// 4) Add each Pokémon to the page
pokemonList.forEach(pokemon => {
  const pokemonItem = document.createElement('p'); // Create <p> element
  let text = `${pokemon.name} (height: ${pokemon.height})`;

  if (pokemon.height === maxHeight) {
    text += " – Wow, that's big!";
  }

  pokemonItem.innerText = text; // Set the text inside <p>
  pokemonSection.appendChild(pokemonItem); // Add it to <section>
});

