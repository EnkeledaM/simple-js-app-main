let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  // Container-i për modal-in
  let modalContainer = document.querySelector('#modal-container');

  // Indeksi i Pokémon-it aktual në modal (për swipe / next / prev)
  let currentPokemonIndex = null;

  // =========================
  //   LOADING MESSAGE (opsionale)
  // =========================
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

  // =========================
  //   CRUD BAZË PËR LISTËN
  // =========================
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

  // =========================
  //   NGARKIMI NGA API
  // =========================
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

  function loadDetails(pokemon) {
    showLoadingMessage();
    let url = pokemon.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        // kërkesat e ushtrimit: imageUrl dhe height
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

  // =========================
  //         MODAL
  // =========================
  function showModal(title, text, imgUrl) {
    // pastro modal-in
    modalContainer.innerHTML = '';

    // krijo kutinë e modal-it
    let modal = document.createElement('div');
    modal.classList.add('modal');

    // butoni i mbylljes
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'X';
    closeButtonElement.addEventListener('click', hideModal);

    // titulli
    let titleElement = document.createElement('h1');
    titleElement.innerText = title;

    // figura
    let imageElement = document.createElement('img');
    imageElement.src = imgUrl;
    imageElement.alt = title + ' image';

    // teksti (height)
    let contentElement = document.createElement('p');
    contentElement.innerText = text;

    // vendos elementët në modal
    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(imageElement);
    modal.appendChild(contentElement);

    // fut modal-in në container
    modalContainer.appendChild(modal);

    // shfaq modal-in
    modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

  // Mbyll me ESC
  window.addEventListener('keydown', function (e) {
    if (
      e.key === 'Escape' &&
      modalContainer.classList.contains('is-visible')
    ) {
      hideModal();
    }

    // BONUS: kalim me shigjeta majtas/djathtas
    if (e.key === 'ArrowRight') {
      showNextPokemon();
    }
    if (e.key === 'ArrowLeft') {
      showPreviousPokemon();
    }
  });

  // Mbyll kur klikon jashtë kutisë së bardhë
  modalContainer.addEventListener('click', function (e) {
    if (e.target === modalContainer) {
      hideModal();
    }
  });

  // =========================
  //   BONUS 2: SWIPE & NEXT/PREV
  // =========================

  // ruaj pozicionin e nisjes së swipe
  let swipeStartX = null;

  // pointerdown – fillimi i swipe
  modalContainer.addEventListener('pointerdown', function (e) {
    swipeStartX = e.clientX;
  });

  // pointerup – fundi i swipe, vendosim drejtimin
  modalContainer.addEventListener('pointerup', function (e) {
    if (swipeStartX === null) {
      return;
    }

    let diffX = e.clientX - swipeStartX;

    // prag i vogël që të mos reagojë për klikime të vogla
    if (Math.abs(diffX) > 50) {
      if (diffX < 0) {
        // swipe majtas → Pokémon-i tjetër
        showNextPokemon();
      } else {
        // swipe djathtas → Pokémon-i i mëparshëm
        showPreviousPokemon();
      }
    }

    swipeStartX = null;
  });

  function showNextPokemon() {
    if (currentPokemonIndex === null) {
      return;
    }

    let nextIndex = currentPokemonIndex + 1;
    if (nextIndex >= pokemonList.length) {
      nextIndex = 0; // kalo në fillim nëse je në fund
    }

    let nextPokemon = pokemonList[nextIndex];
    showDetails(nextPokemon);
  }

  function showPreviousPokemon() {
    if (currentPokemonIndex === null) {
      return;
    }

    let prevIndex = currentPokemonIndex - 1;
    if (prevIndex < 0) {
      prevIndex = pokemonList.length - 1; // kalo në fund nëse je në fillim
    }

    let prevPokemon = pokemonList[prevIndex];
    showDetails(prevPokemon);
  }

  // =========================
  //   DETAJET E POKÉMON-IT
  // =========================
  function showDetails(pokemon) {
    // ruaj indeksin aktual (për next/prev/swipe)
    currentPokemonIndex = pokemonList.indexOf(pokemon);

    loadDetails(pokemon).then(function () {
      showModal(
        pokemon.name,
        'Height: ' + pokemon.height,
        pokemon.imageUrl
      );
    });
  }

  // Kthe funksionet publike
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

// Ngarko listën dhe shfaq butonat
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
