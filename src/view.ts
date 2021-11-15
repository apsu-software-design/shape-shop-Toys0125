import { Product } from "./products";
export class ProductViewer {
    public viewItemInCart(product:Product,quantity:number):void {
            console.log("");
            console.log("       Name: "+product.getName());
            console.log("      Price: "+product.getPrice());
            console.log("Description: "+product.getDescription());
            console.log("   Quantity: "+quantity);
    }
    public viewCartTotal(total:number):void {
        console.log("Shopping Cart Total: "+total);
    }
    public viewItems(products:Product[]){
        for (let i = 0; i < products.length; i++) {
            console.log(i+": "+products[i].getName());
        }
    }
}