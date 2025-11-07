const pokemonList = [
  { name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison'] },
  { name: 'Charmander', height: 0.6, types: ['fire'] },
  { name: 'Squirtle', height: 0.5, types: ['water'] },
  { name: 'Onix', height: 8.8, types: ['rock', 'ground'] }
];

const pokemonSection = document.getElementById('pokemon-list');

pokemonList.forEach(pokemon => {
  // krijoj një element <div> për çdo Pokémon
  const item = document.createElement('div');
  item.classList.add('pokemon-item');

  // vendos klasën sipas tipit kryesor
  const mainType = pokemon.types[0];
  item.classList.add(`type-${mainType}`);

  // krijoj tekstin që do të shfaqet
  let text = `${pokemon.name} (height: ${pokemon.height})`;

  if (pokemon.height >= 8) {
    text += " – Wow, that's big!";
    item.classList.add('big');
  }

  item.innerText = text;

  // shto në seksion
  pokemonSection.appendChild(item);
});


