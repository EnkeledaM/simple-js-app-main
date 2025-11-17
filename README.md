# Pokémon App – Exercise 1.7

This project is part of the CareerFoundry Full-Stack Web Development Program.

## Goal

The goal of Exercise 1.7 is to:

- Load a list of Pokémon from the external PokéAPI using `fetch()`
- Work with asynchronous JavaScript and Promises
- Replace a static list with data loaded from an API
- Load additional details for each Pokémon on demand
- Dynamically create a list of buttons in the DOM

## What I implemented

- Added Promise and Fetch polyfills
- Replaced the static Pokémon array with an empty array
- Implemented `loadList()` to fetch all Pokémon (name + detailsUrl)
- Implemented `loadDetails()` to fetch image, height and types
- Implemented `addListItem()` to create a button for each Pokémon
- Implemented `showDetails()` to load details and log the full Pokémon object in the console
- (Bonus) Added a simple loading message while data is being fetched

## How to run

- Open `index.html` in a browser (preferably using Live Server)
- Wait for the Pokémon list to load
- Open the browser console and click on a Pokémon to see its details
