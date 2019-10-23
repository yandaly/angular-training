import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor(
    private http: HttpClient
  ) { }

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

  getShippingPrice() {
    return this.http.get('/assets/shipping.json');
  }

  getTotalPrice() {
    let price = 0;
    for (let i = 0; i < this.items.length; i++) {
      price += this.items[i].price;
    }
    return price;
  }

  getCount() {
    return (
      this.items.length
    );
  }
}
