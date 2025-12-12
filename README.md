
# Exercise 1.10 – Bootstrap & UI Libraries (Pokédex App)

CareerFoundry – Intro to JavaScript / AJAX & API Interactions

## 📌 Overview  
This project was initially created in earlier exercises and has been extended in Exercise 1.10 to include Bootstrap and UI libraries, improving layout, responsiveness, and overall user experience.

## UI Improvements (Exercise 1.10)

In this exercise, Bootstrap 4.3.1 was integrated into the existing Pokédex application to improve the user interface and responsiveness. A Bootstrap navbar, list-group layout, and modal component were added. The modal is triggered using Bootstrap data attributes, while the content (Pokémon name, image, height, and types) is dynamically loaded from the PokéAPI using JavaScript.

---

## ✅ Requirements Completed

### 1. Load Pokémon list using Fetch API  
- The app connects to **https://pokeapi.co/api/v2/pokemon/**  
- The list is saved inside an IIFE (`pokemonRepository`).  
- All Pokémon are displayed as buttons inside a `<ul>` element.

### 2. Show Pokémon details in a modal  
When a user clicks a Pokémon button:  
- The detailed data (height, image, types) is fetched from the API.  
- A modal is generated dynamically with the Pokémon information.

### 3. Modal closing functionality (all 3 required methods)
- Clicking the **Close** button  
- Clicking **outside the modal**  
- Pressing the **Escape (ESC)** key  

### 4. Loading Indicator  
A simple loading message/animation appears while the app fetches API data.

### 5. Code Structure (IIFE)  
The whole application is wrapped inside an IIFE to avoid polluting the global namespace.

---

## ⭐ Bonus Task 2 – Additional Interaction  
I added enhanced UI interactions to the Pokémon App, including:  
- Smooth hover animations for Pokémon buttons  
- Transition effects  
- A more polished modal appearance  
These additions improve usability and demonstrate interactivity beyond the base requirements.

---

