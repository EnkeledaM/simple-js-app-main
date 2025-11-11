# Simple JS App – Exercise 1.5

This project is part of the **CareerFoundry Full-Stack Web Development Program**.

### Goal of Exercise 1.5
In this exercise, the app was refactored to:
- Display Pokémon directly in the **browser DOM** (not only in the console)
- Use **forEach()** instead of a regular `for` loop
- Implement the **Repository Pattern** with an **IIFE (Immediately Invoked Function Expression)**
- Expose only two public functions:
  - `add()` – adds a new Pokémon (after validating it's a proper object)
  - `getAll()` – returns all Pokémon in the repository

### Features
- Pokémon data is stored inside a private `pokemonList` array within an IIFE, preventing global access.
- Pokémon are dynamically displayed in the browser using DOM manipulation.
- The tallest Pokémon is marked with the label _“Wow, that’s big!”_.
- Includes basic validation inside the `add()` function to ensure data integrity.

### Technologies Used
- **HTML5**
- **CSS3**
- **JavaScript (ES6)**

### Project Structure
