"use strict";
//User Interface for The Shopping Cart 
//@author James Church
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
var readlineSync = require("readline-sync"); //for easier repeated prompts
var view_1 = require("./view");
var controller_1 = require("./controller");
// Hey look. It's a global variable. This is totally cool, right?
/**
 * Function to run the UI
 */
function start() {
    var view = new view_1.ProductViewer;
    var controller = new controller_1.ProductController(view);
    showMainMenu(controller);
}
exports.start = start;
/**
 * The main menu. Will show until the user exits
 */
function showMainMenu(controller) {
    while (true) { //run until we exit
        console.log("Welcome to the Shape Store! We offer the best shapes! Pick an option:\n  1. Add an item to the cart.\n  2. Remove an item to the cart.\n  3. View the items in the cart.\n  4. View the price of all items.\n  5. Quit.");
        var response = readlineSync.question('> ');
        if (response === '5' || response.slice(0, 2).toLowerCase() === ':q') {
            break; //stop looping, thus leaving method
        }
        switch (response) { //handle each response
            case '1':
                controller.addItemToCart();
                break;
            case '2':
                controller.removeItemFromCart();
                break;
            case '3':
                controller.viewItemsInCart();
                break;
            case '4':
                controller.viewCartTotal();
                break;
            default: console.log('Invalid option!');
        }
        console.log(''); //extra empty line for revisiting
    }
}
