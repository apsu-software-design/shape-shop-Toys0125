"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductViewer = void 0;
var ProductViewer = /** @class */ (function () {
    function ProductViewer() {
    }
    ProductViewer.prototype.viewItemInCart = function (product, quantity) {
        console.log("");
        console.log("       Name: " + product.getName());
        console.log("      Price: " + product.getPrice());
        console.log("Description: " + product.getDescription());
        console.log("   Quantity: " + quantity);
    };
    ProductViewer.prototype.viewCartTotal = function (total) {
        console.log("Shopping Cart Total: " + total);
    };
    ProductViewer.prototype.viewItems = function (products) {
        for (var i = 0; i < products.length; i++) {
            console.log(i + ": " + products[i].getName());
        }
    };
    return ProductViewer;
}());
exports.ProductViewer = ProductViewer;
