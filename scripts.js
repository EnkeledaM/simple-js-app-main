let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  // --------------------------------------------------------
  // 1. Helper: mesazhi "Loading..."
  // --------------------------------------------------------
  function showLoadingMessage() {
    let loadingMessage = document.querySelector('.loading-message');

    // Nëse elementin nuk e kemi në HTML, e krijojmë me JS
    if (!loadingMessage) {
      loadingMessage = document.createElement('div');
      loadingMessage.classList.add('loading-message');
      loadingMessage.innerText = 'Loading…';
      document.body.appendChild(loadingMessage);
    }

    // E bëjmë të dukshëm
    loadingMessage.style.display = 'block';
  }

  function hideLoadingMessage() {
    let loadingMessage = document.querySelector('.loading-message');
    if (loadingMessage) {
      loadingMessage.style.display = 'none';
    }
  }

  // --------------------------------------------------------
  // 2. Helper: modal popup për detajet e Pokémon
  // --------------------------------------------------------
  function showModal(pokemon) {
    let modal = document.querySelector('#pokemon-modal');
    let titleElement = modal.querySelector('.modal-title');
    let imgElement = modal.querySelector('.modal-img');
    let heightElement = modal.querySelector('.modal-height');
    let typesElement = modal.querySelector('.modal-types');

    titleElement.innerText = capitalize(pokemon.name);
    imgElement.src = pokemon.imageUrl;
    imgElement.alt = pokemon.name;

    heightElement.innerText = 'Height: ' + pokemon.height;
    typesElement.innerText = 'Types: ' + pokemon.types
      .map(function (typeItem) {
        return typeItem.type.name;
      })
      .join(', ');

    modal.style.display = 'block';
  }

  function hideModal() {
    let modal = document.querySelector('#pokemon-modal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  // Vendosim event listeners për mbylljen e modal-it
  (function setUpModalEvents() {
    let modal = document.querySelector('#pokemon-modal');
    if (!modal) return;

    let closeButton = modal.querySelector('.modal-close');
    closeButton.addEventListener('click', hideModal);

    // klik jashtë kutisë
    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        hideModal();
      }
    });

    // butoni Escape
    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && modal.style.display === 'block') {
        hideModal();
      }
    });
  })();

  // --------------------------------------------------------
  // 3. Funksionet bazë të "repository"-t
  // --------------------------------------------------------
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonListElement = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');

    button.innerText = capitalize(pokemon.name);
    button.classList.add('pokemon-button');

    listItem.appendChild(button);
    pokemonListElement.appendChild(listItem);

    button.addEventListener('click', function () {
      showDetails(pokemon);
    });
  }

  // --------------------------------------------------------
  // 4. Ngarkimi i listës nga API
  // --------------------------------------------------------
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

  // --------------------------------------------------------
  // 5. Ngarkimi i detajeve për një Pokémon të vetëm
  // --------------------------------------------------------
  function loadDetails(item) {
    showLoadingMessage();
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;

        hideLoadingMessage();
      })
      .catch(function (e) {
        console.error(e);
        hideLoadingMessage();
      });
  }

  // --------------------------------------------------------
  // 6. Kur klikojmë një buton Pokémon
  // --------------------------------------------------------
  function showDetails(item) {
    loadDetails(item).then(function () {
      showModal(item);
    });
  }

  // --------------------------------------------------------
  // 7. Helper i vogël për emrat (shkronja e parë e madhe)
  // --------------------------------------------------------
  function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Çfarë i japim jashtë IIFE
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

// --------------------------------------------------------
// 8. Start i aplikacionit: ngarko listën dhe krijo butonat
// --------------------------------------------------------
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

