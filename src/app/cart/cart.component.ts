import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  count;
  price;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.count = this.cartService.getCount();
    this.price = this.cartService.getTotalPrice();
  }
}
