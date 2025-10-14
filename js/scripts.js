
/***********************
 * Exercise 1.3 — scripts.js
 * 1) For loop: liston emër + lartësi
 * 2) If: shton "Wow, that's big!" vetëm për Pokémon-in më të madh
 ***********************/

// Të dhënat (mund të përdorësh këtë ose array-n tënd nga ushtrimi i kaluar)
const pokemonList = [
  { name: 'Bulbasaur',  height: 7,  types: ['grass', 'poison'] },
  { name: 'Charizard',  height: 17, types: ['fire', 'flying'] },
  { name: 'Squirtle',   height: 5,  types: ['water'] },
  { name: 'Onix',       height: 88, types: ['rock', 'ground'] }
];

// 1) Gjejmë lartësinë maksimale (më të gjatin)
let maxHeight = -Infinity;
for (let i = 0; i < pokemonList.length; i++) {
  const p = pokemonList[i];
  if (p.height > maxHeight) {
    maxHeight = p.height;
  }
}

// 2) Shfaqim listën; vetëm NJË merr "Wow, that's big!"
let bigTagged = false; // siguron vetëm një etiketim
for (let i = 0; i < pokemonList.length; i++) {
  const p = pokemonList[i];
  let line = p.name + ' (height: ' + p.height + ')';

  if (!bigTagged && p.height === maxHeight) {
    line += ' - Wow, that\'s big!';
    bigTagged = true;
  }

  // Lejohet HTML brenda string-ut
  document.write('<p>' + line + '</p>');
}



