// @ts-nocheck
import { Component, OnInit } from '@angular/core';
import { PRODUCT } from 'src/models/product.model';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: PRODUCT[] = [];
  allProducts: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // displaying the products in the cart and getting total amount of them
    this.cartService.productList.subscribe(data => {
      this.products = data;
      this.allProducts = this.cartService.getTotalAmount();
    })
  }

  // removes product from cart one by one
  removeProduct(item: any) {
    this.products.splice(item, 1);
    this.cartService.setProduct(this.products);
  }

  // removes all products from the cart
  removeAllProducts() {
    this.products = [];
    this.cartService.setProduct(this.products);
  }

}
