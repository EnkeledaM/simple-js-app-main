let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  // BONUS: loading message helpers
  function showLoadingMessage() {
    let loadingElement = document.querySelector('.loading-message');
    if (loadingElement) {
      loadingElement.style.display = 'block';
    }
  }

  function hideLoadingMessage() {
    let loadingElement = document.querySelector('.loading-message');
    if (loadingElement) {
      loadingElement.style.display = 'none';
    }
  }

  // Shton një Pokémon në listë
  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'detailsUrl' in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.error('Invalid Pokémon:', pokemon);
    }
  }

  // Kthen të gjithë Pokémon-ët
  function getAll() {
    return pokemonList;
  }

  // Krijon një <li> + <button> për çdo Pokémon
  function addListItem(pokemon) {
    let listElement = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');

    button.innerText = pokemon.name; // CSS bën capitalize
    button.classList.add('pokemon-button');

    listItem.appendChild(button);
    listElement.appendChild(listItem);

    button.addEventListener('click', function () {
      showDetails(pokemon);
    });
  }

  // Merr listën e Pokémon nga API
  function loadList() {
    showLoadingMessage();
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
        hideLoadingMessage();
      })
      .catch(function (e) {
        console.error(e);
        hideLoadingMessage();
      });
  }

  // Merr detajet për një Pokémon të vetëm
  function loadDetails(pokemon) {
    showLoadingMessage();
    let url = pokemon.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        // këto janë kërkesat e ushtrimit: imageUrl dhe height
        pokemon.imageUrl = details.sprites.front_default;
        pokemon.height = details.height;
        pokemon.types = details.types;
        hideLoadingMessage();
      })
      .catch(function (e) {
        console.error(e);
        hideLoadingMessage();
      });
  }

  // Përdoret kur klikohet butoni i Pokémon
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      // Për 1.7 mjafton të log-osh në console
      console.log(pokemon);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

// Pasi ngarkohet lista nga API, krijojmë butonat në DOM
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

