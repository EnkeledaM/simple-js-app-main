<<<<<<< HEAD
Simple JS App – CareerFoundry Achievement 1
This project is part of the CareerFoundry Full-Stack Web Development Program.
It focuses on building a simple JavaScript application using modern ES6+ features, the Module Pattern (IIFE), DOM manipulation, and event handling.

The app displays a list of Pokémon and allows basic interaction through clickable buttons.
Further functionality will be added in later exercises (such as modals, fetching data from an API, etc.).

🟦 Exercise 1.5 – IIFE & DOM Basics
🎯 Goal of Exercise 1.5
This exercise refactored the initial JavaScript code to use more modern and maintainable patterns.

✔️ Features Implemented in 1.5
Display Pokémon directly in the browser DOM (not only in the console)
Use forEach() instead of a traditional for loop
Implement the Repository Pattern using an IIFE (Immediately Invoked Function Expression)
Expose only two public functions:
add() – adds a new Pokémon to the dataset
getAll() – returns the full Pokémon list
Store the Pokémon list inside a private array to prevent global access
Basic validation inside add() to ensure data integrity
🟩 Exercise 1.6 – DOM Interaction & Event Handling
🎯 Goal of Exercise 1.6
Transform the app into a fully interactive UI by:

Replacing document.write() (not used in modern apps)
Using real DOM manipulation (createElement, appendChild)
Creating list items and buttons dynamically
Handling click events to show Pokémon details
Preparing the UI for future modal functionality
✔️ What Was Implemented in 1.6
🔹 1. Updated HTML Structure
Added an empty <ul class="pokemon-list"></ul> to be filled by JavaScript.
🔹 2. Implemented addListItem(pokemon)
This function:

Creates a new <li> element
Creates a <button> containing the Pokémon name
Adds a CSS class for styling (pokemon-button)
Appends button → to list item → to the ul.pokemon-list
🔹 3. Implemented showDetails(pokemon)
Currently logs the Pokémon object in the browser console
This will later be used to show modal information
🔹 4. Added Event Listeners
Each button listens for a "click" event
Clicking the button triggers:
showDetails(pokemon);
🔹 5. Final Result
UI dynamically generated using JavaScript
Pokémon list displayed as interactive buttons
Clicking any Pokémon shows its details in the console
Code now uses modern DOM techniques and is production-ready
🛠 Technologies Used
HTML5
CSS3
JavaScript (ES6+)
DOM API
📂 Project Structure
simple-js-app/
│
├── index.html
├── README.md
│
├── css/
│   └── styles.css
│
└── js/
    └── scripts.js
🚀 How to Run the Project
Download or clone the repository
git clone https://github.com/EnkeledaM/simple-js-app-main

Open index.html in any modern browser (Chrome recommended)

Open DevTools → Console
When clicking a Pokémon button, its details will appear in the console.

📌 Next Steps (Coming in Later Exercises)
Fetching Pokémon list from an external API
Creating a modal window to show full Pokémon details
Adding loading indicators
Improving accessibility
Writing more modular and scalable JS
👩‍💻 Author
Enkeleda Mustafaj
CareerFoundry Full-Stack Web Development Program
=======
# Simple JS App – CareerFoundry Achievement 1

This project is part of the **CareerFoundry Full-Stack Web Development Program**.  
It focuses on building a simple JavaScript application using modern ES6+ features, the Module Pattern (IIFE), DOM manipulation, and event handling.

The app displays a list of Pokémon and allows basic interaction through clickable buttons.  
Further functionality will be added in later exercises (such as modals, fetching data from an API, etc.).

---

## 🟦 Exercise 1.5 – IIFE & DOM Basics

### 🎯 Goal of Exercise 1.5
This exercise refactored the initial JavaScript code to use more modern and maintainable patterns.

### ✔️ Features Implemented in 1.5
- Display Pokémon directly in the **browser DOM** (not only in the console)
- Use `forEach()` instead of a traditional `for` loop
- Implement the **Repository Pattern** using an **IIFE (Immediately Invoked Function Expression)**
- Expose only two public functions:
  - `add()` – adds a new Pokémon to the dataset
  - `getAll()` – returns the full Pokémon list
- Store the Pokémon list inside a *private* array to prevent global access
- Basic validation inside `add()` to ensure data integrity

---

## 🟩 Exercise 1.6 – DOM Interaction & Event Handling

### 🎯 Goal of Exercise 1.6
Transform the app into a fully interactive UI by:
- Replacing `document.write()` (not used in modern apps)
- Using real DOM manipulation (`createElement`, `appendChild`)
- Creating list items and buttons dynamically
- Handling click events to show Pokémon details
- Preparing the UI for future modal functionality

### ✔️ What Was Implemented in 1.6

#### 🔹 1. Updated HTML Structure
- Added an empty `<ul class="pokemon-list"></ul>` to be filled by JavaScript.

#### 🔹 2. Implemented `addListItem(pokemon)`
This function:
- Creates a new `<li>` element
- Creates a `<button>` containing the Pokémon name
- Adds a CSS class for styling (`pokemon-button`)
- Appends button → to list item → to the `ul.pokemon-list`

#### 🔹 3. Implemented `showDetails(pokemon)`
- Currently logs the Pokémon object in the browser console
- This will later be used to show modal information

#### 🔹 4. Added Event Listeners
- Each button listens for a `"click"` event
- Clicking the button triggers:

```js
showDetails(pokemon);
```

#### 🔹 5. Final Result
- UI dynamically generated using JavaScript
- Pokémon list displayed as interactive buttons
- Clicking any Pokémon shows its details in the console
- Code now uses modern DOM techniques and is production-ready

---

## 🛠 Technologies Used
- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **DOM API**

---

## 📂 Project Structure

```
simple-js-app/
│
├── index.html
├── README.md
│
├── css/
│   └── styles.css
│
└── js/
    └── scripts.js
```

---

## 🚀 How to Run the Project

1. Download or clone the repository  
   `git clone https://github.com/EnkeledaM/simple-js-app-main`
   
2. Open `index.html` in any modern browser (Chrome recommended)

3. Open DevTools → Console  
   When clicking a Pokémon button, its details will appear in the console.

---

## 📌 Next Steps (Coming in Later Exercises)

- Fetching Pokémon list from an external API  
- Creating a modal window to show full Pokémon details  
- Adding loading indicators  
- Improving accessibility  
- Writing more modular and scalable JS

---

## 👩‍💻 Author
Enkeleda Mustafaj  
CareerFoundry Full-Stack Web Development Program

>>>>>>> 505f61f9152f5ff31698b3cc612a0d551ffee3d7
