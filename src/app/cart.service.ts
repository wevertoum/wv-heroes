import { Injectable } from "@angular/core";

@Injectable({
  provideIn: "root"
})
export class CartService {
  items = [];
  constructor() {}

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }
  
 clearCart() {
    this.items = [];
    return this.items;
  }

}
