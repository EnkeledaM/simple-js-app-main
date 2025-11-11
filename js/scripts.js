let pokemonRepository = (function () {
  let pokemonList = [
    { name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison'] },
    { name: 'Charmander', height: 0.6, types: ['fire'] },
    { name: 'Squirtle', height: 0.5, types: ['water'] },
    { name: 'Onix', height: 8.8, types: ['rock', 'ground'] }
  ];

  // Bonus: kontrollon që të shtohet vetëm objekt i vlefshëm Pokémon
  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'height' in pokemon &&
      'types' in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.error('Invalid Pokémon:', pokemon);
    }
  }

  function getAll() {
    return pokemonList;
  }

  // Vetëm këta funksione dalin jashtë IIFE
  return {
    add: add,
    getAll: getAll
  };
})();

// -------- SHFAQJA NE DOM --------
let container = document.getElementById('pokemon-list');

// gjej më të gjatin
let maxHeight = -Infinity;
pokemonRepository.getAll().forEach(p => {
  if (p.height > maxHeight) maxHeight = p.height;
});

// shfaq çdo Pokémon në faqe
pokemonRepository.getAll().forEach(pokemon => {
  let card = document.createElement('div');
  card.className = 'pokemon-card';

  let text = `${pokemon.name} (height: ${pokemon.height})`;
  if (pokemon.height === maxHeight) text += " – Wow, that's big!";

  card.textContent = text;
  container.appendChild(card);
});


