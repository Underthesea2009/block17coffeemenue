// Prompt 1:
// Clean the coffee_data file:

// Checklist:
// a. All prices should be numbers.
// b. All items should be strings.
// c. Objects and properties should have commas separating them.
// d. Connect the coffee_data.js file to the index.js file.

// index.js

const coffeeMenu = require('./coffee_data');

// Print an array of all the drinks on the menu.
const allDrinks = coffeeMenu.map(item => item.name);
console.log(allDrinks);

// Print an array of drinks that cost 5 and under.
const cheapDrinks = coffeeMenu.filter(item => item.price <= 5);
console.log(cheapDrinks);

// Print an array of drinks that are priced at an even number.
const evenPricedDrinks = coffeeMenu.filter(item => item.price % 2 === 0);
console.log(evenPricedDrinks);

// Print the total if you were to order one of every drink.
const totalCost = coffeeMenu.reduce((total, item) => total + item.price, 0);
console.log(`Total cost if you order one of every drink: $${totalCost}`);

// Print an array with all the drinks that are seasonal.
const seasonalDrinks = coffeeMenu.filter(item => item.seasonal);
console.log(seasonalDrinks);

// Print all the seasonal drinks with the words "with imported beans" after the item name.
const seasonalDrinksWithImportedBeans = coffeeMenu
  .filter(item => item.seasonal)
  .map(item => `${item.name} with imported beans`);

console.log(seasonalDrinksWithImportedBeans);



