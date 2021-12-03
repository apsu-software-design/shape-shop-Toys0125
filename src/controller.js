"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
var products_1 = require("./products");
var readlineSync = require("readline-sync"); //for easier repeated prompts
var ProductController = /** @class */ (function () {
    function ProductController(view) {
        this.shopping_cart = [];
        this.quantity_cart = [];
        this.view = view;
    }
    ProductController.prototype.addItemToCart = function () {
        this.letUserSelectItem();
        this.letUserSelectQuantity();
    };
    ProductController.prototype.letUserSelectItem = function () {
        console.log("Here you can select your shape. Pick an option:\n  1. Buy a Triangle!\n  2. Buy a Square!\n  3. Buy a Pentagon!\n  4. Go back. Don't buy anything.");
        var response = readlineSync.question('> ');
        switch (response) { //handle each response
            case '1':
                this.shopping_cart.push(new products_1.Product("Triangle", 3.5, "It's got three sides!"));
                break;
            case '2':
                this.shopping_cart.push(new products_1.Product("Square", 4.5, "It's got four sides!"));
                break;
            case '3':
                this.shopping_cart.push(new products_1.Product("Pentagon", 5.5, "It's got five sides!"));
                break;
            default: console.log('Invalid option!');
        }
        console.log(''); //extra empty line for revisiting
    };
    ProductController.prototype.letUserSelectQuantity = function () {
        console.log("How many of this shape would you like to purchase?\n      ");
        var response = readlineSync.question('> ');
        this.quantity_cart.push(parseInt(response));
        console.log(''); //extra empty line for revisiting
    };
    ProductController.prototype.removeItemFromCart = function () {
        console.log("Select an item to be removed from the cart.\n      ");
        this.view.viewItems(this.shopping_cart);
        var response = readlineSync.question('> ');
        var toRemove = parseInt(response);
        this.shopping_cart.splice(toRemove, 1);
        this.quantity_cart.splice(toRemove, 1);
        console.log(''); //extra empty line for revisiting
    };
    ProductController.prototype.viewItemsInCart = function () {
        for (var x = 0; x < this.shopping_cart.length; x++) {
            this.view.viewItemInCart(this.shopping_cart[x], this.quantity_cart[x]);
        }
        ;
    };
    ProductController.prototype.viewCartTotal = function () {
        var total = 0;
        for (var i = 0; i < this.shopping_cart.length; i++) {
            total += this.shopping_cart[i].getPrice() * this.quantity_cart[i];
        }
        this.view.viewCartTotal(total);
    };
    return ProductController;
}());
exports.ProductController = ProductController;
