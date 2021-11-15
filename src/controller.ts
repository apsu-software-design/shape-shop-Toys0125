import { ProductViewer } from "./view";
import { Product } from "./products";
import readlineSync = require('readline-sync'); //for easier repeated prompts

export class ProductController {
    shopping_cart: Product[];
    quantity_cart: number[];
    view: ProductViewer;
    constructor(view: ProductViewer) {
        this.shopping_cart = [];
        this.quantity_cart = [];
        this.view = view;
    }
    public addItemToCart() {
        this.letUserSelectItem();
        this.letUserSelectQuantity();
    }
    public letUserSelectItem() {
        console.log(`Here you can select your shape. Pick an option:
  1. Buy a Triangle!
  2. Buy a Square!
  3. Buy a Pentagon!
  4. Go back. Don't buy anything.`);

        let response = readlineSync.question('> ')

        switch (response) { //handle each response
            case '1': this.shopping_cart.push(new Product("Triangle", 3.5, "It's got three sides!")); break;
            case '2': this.shopping_cart.push(new Product("Square", 4.5, "It's got four sides!")); break;
            case '3': this.shopping_cart.push(new Product("Pentagon", 5.5, "It's got five sides!")); break;
            default: console.log('Invalid option!');
        }
        console.log(''); //extra empty line for revisiting
    }
    public letUserSelectQuantity() {
        console.log(`How many of this shape would you like to purchase?
      `);

        let response = readlineSync.question('> ')
        this.quantity_cart.push(parseInt(response));
        console.log(''); //extra empty line for revisiting
    }
    public removeItemFromCart() {
        console.log(`Select an item to be removed from the cart.
      `);

        this.view.viewItems(this.shopping_cart);

        let response = readlineSync.question('> ')
        let toRemove = parseInt(response);

        this.shopping_cart.splice(toRemove, 1);
        this.quantity_cart.splice(toRemove, 1);

        console.log(''); //extra empty line for revisiting
    }
    public viewItemsInCart() {
        for (let x = 0; x < this.shopping_cart.length; x++) {
            this.view.viewItemInCart(this.shopping_cart[x], this.quantity_cart[x]);
        };
    }
    public viewCartTotal() {
        let total: number = 0;
        for (let i = 0; i < this.shopping_cart.length; i++) {
            total += this.shopping_cart[i].getPrice() * this.quantity_cart[i];
        }
        this.view.viewCartTotal(total);
    }
}