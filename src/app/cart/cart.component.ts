import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  count;
  price;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.count = this.cartService.getCount();
    this.price = this.cartService.getTotalPrice();
  }
}