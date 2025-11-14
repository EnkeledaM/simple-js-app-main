// IIFE që kapsulon logjikën e aplikacionit
let pokemonRepository = (function () {
  // ---------------------------
  // 1. Lista private e Pokémonëve
  // ---------------------------
  let pokemonList = [
    { name: 'bulbasaur', height: 0.7, types: ['grass', 'poison'] },
    { name: 'charmander', height: 0.6, types: ['fire'] },
    { name: 'squirtle', height: 0.5, types: ['water'] }
  ];

  // Shton një Pokémon të ri në listë
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  // Kthen gjithë listën
  function getAll() {
    return pokemonList;
  }

  // ---------------------------------------
  // 2. Shfaq detajet e një Pokémon (për tani
  //    vetëm console.log, siç kërkon detyra)
  // ---------------------------------------
  function showDetails(pokemon) {
    console.log(pokemon);
  }

  // -----------------------------------------------------
  // 3. Krijon një <li><button> në DOM për një Pokémon
  //    dhe e shton te <ul class="pokemon-list">
  // -----------------------------------------------------
  function addListItem(pokemon) {
    // 3.1. Gjejmë <ul class="pokemon-list">
    let pokemonListElement = document.querySelector('.pokemon-list');

    // 3.2. Krijojmë elementin e listës <li>
    let listItem = document.createElement('li');

    // 3.3. Krijojmë butonin
    let button = document.createElement('button');

    // 3.4. Vendosim emrin e Pokémon si tekst të butonit
    button.innerText = pokemon.name;

    // 3.5. Shtojmë klasën për stilim (CSS → .pokemon-button)
    button.classList.add('pokemon-button');

    // 3.6. Vendosim butonin brenda <li>
    listItem.appendChild(button);

    // 3.7. Vendosim <li> brenda <ul>
    pokemonListElement.appendChild(listItem);

    // 3.8. Shtojmë event listener - klikimi thërret showDetails
    button.addEventListener('click', function () {
      showDetails(pokemon);
    });
  }

  // Kthejmë funksionet që duam t'i përdorim jashtë IIFE
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();

// --------------------------------------------------------
// 4. Ndërtimi i UI:
//    për çdo Pokémon krijojmë një buton në listë
// --------------------------------------------------------
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});

