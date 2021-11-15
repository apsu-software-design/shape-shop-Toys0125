//User Interface for The Shopping Cart 
//@author James Church

import readlineSync = require('readline-sync'); //for easier repeated prompts
import { ProductViewer } from './view';
import { ProductController } from './controller';

// Hey look. It's a global variable. This is totally cool, right?


/**
 * Function to run the UI
 */
export function start() {
  let view = new ProductViewer;
  let controller = new ProductController(view);
  showMainMenu(controller);
}

/**
 * The main menu. Will show until the user exits
 */
function showMainMenu(controller: ProductController) {
  while(true){ //run until we exit
    console.log(`Welcome to the Shape Store! We offer the best shapes! Pick an option:
  1. Add an item to the cart.
  2. Remove an item to the cart.
  3. View the items in the cart.
  4. View the price of all items.
  5. Quit.`);

    let response = readlineSync.question('> ')
    if(response === '5' || response.slice(0,2).toLowerCase() === ':q'){
      break; //stop looping, thus leaving method
    }

    switch(response) { //handle each response
      case '1': controller.addItemToCart(); break;
      case '2': controller.removeItemFromCart(); break;
      case '3': controller.viewItemsInCart(); break;
      case '4': controller.viewCartTotal(); break;
      default: console.log('Invalid option!');
    }
    console.log(''); //extra empty line for revisiting
    
  }
}
