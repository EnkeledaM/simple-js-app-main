/* global fetch */

const pokemonRepository = (function () {
  const pokemonList = [];
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function add(pokemon) {
    if (typeof pokemon === "object" && pokemon.name && pokemon.detailsUrl) {
      pokemonList.push(pokemon);
    } else {
      // mbrojtje minimale kundër input-eve të gabuara
      console.error("Invalid Pokémon object", pokemon);
    }
  }

  function getAll() {
    return pokemonList;
  }

  // Krijon një <li> me button Bootsrap për çdo Pokémon
  function addListItem(pokemon) {
    const list = document.querySelector(".pokemon-list");

    const listItem = document.createElement("li");
    // list-group-item është nga Bootstrap List Group
    listItem.classList.add("list-group-item");

    const button = document.createElement("button");
    button.innerText = pokemon.name;
    // klasa jote + klasa të Bootstrap
    button.classList.add(
      "pokemon-list__button",
      "btn",
      "btn-primary",
      "btn-block",
      "text-capitalize"
    );

    // i themi Bootstrap-it që ky buton hap modalin me id #pokemon-modal
    button.setAttribute("data-toggle", "modal");
    button.setAttribute("data-target", "#pokemon-modal");

    // kur klikohet, ne e mbushim modalin me të dhënat e Pokémon-it
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });

    listItem.appendChild(button);
    list.appendChild(listItem);
  }

  function loadList() {
    showLoadingMessage();
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        hideLoadingMessage();
        json.results.forEach(function (item) {
          const pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        hideLoadingMessage();
        console.error(e);
      });
  }

  function loadDetails(pokemon) {
    showLoadingMessage();
    return fetch(pokemon.detailsUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        hideLoadingMessage();
        // shtojmë detajet që na duhen për modal
        pokemon.imageUrl = details.sprites.front_default;
        pokemon.height = details.height;
        pokemon.types = details.types.map(function (typeItem) {
          return typeItem.type.name;
        });
      })
      .catch(function (e) {
        hideLoadingMessage();
        console.error(e);
      });
  }

  // mbush modalin Bootstrap me të dhënat e Pokémon-it
  function showModal(pokemon) {
    const modalTitle = document.querySelector("#pokemon-modal-label");
    const modalBody = document.querySelector("#pokemon-modal .modal-body");

    // pastrojmë përmbajtjen e vjetër
    modalTitle.innerText = "";
    modalBody.innerHTML = "";

    // titulli
    modalTitle.innerText = pokemon.name;

    // imazhi
    const imageElement = document.createElement("img");
    imageElement.classList.add("pokemon-image", "img-fluid");
    imageElement.src = pokemon.imageUrl;
    imageElement.alt = `Image of ${pokemon.name}`;

    // lartësia
    const heightElement = document.createElement("p");
    heightElement.classList.add("pokemon-height");
    heightElement.innerText = `Height: ${pokemon.height}`;

    // tipet
    const typesElement = document.createElement("p");
    typesElement.classList.add("pokemon-types");
    typesElement.innerText = `Types: ${pokemon.types.join(", ")}`;

    // shtojmë në modal-body
    modalBody.appendChild(imageElement);
    modalBody.appendChild(heightElement);
    modalBody.appendChild(typesElement);
  }

  // thërret loadDetails dhe më pas showModal
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
      // vetë Bootstrap e hap modalin për shkak të data-toggle/data-target
    });
  }

  // kërkim i thjeshtë në listë
  function search(query) {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return getAll();
    }

    return getAll().filter(function (pokemon) {
      return pokemon.name.toLowerCase().indexOf(normalized) !== -1;
    });
  }

  function resetList() {
    const list = document.querySelector(".pokemon-list");
    list.innerHTML = "";
  }

  function showLoadingMessage() {
    const alertElement = document.querySelector(".alert--info");
    if (alertElement) {
      alertElement.style.display = "block";
      alertElement.innerText = "Loading...";
    }
  }

  function hideLoadingMessage() {
    const alertElement = document.querySelector(".alert--info");
    if (alertElement) {
      alertElement.style.display = "none";
    }
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    search: search,
    resetList: resetList,
  };
})();

// fillojmë aplikacionin
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

// event për kërkimin live
document.querySelector("#search").addEventListener("input", function (e) {
  pokemonRepository.resetList();
  pokemonRepository.search(e.target.value).forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
