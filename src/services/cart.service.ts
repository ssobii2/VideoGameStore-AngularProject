// @ts-nocheck
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PRODUCT } from 'src/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartDataList = [];
  productList = new BehaviorSubject([]);

  constructor() {
    const ls = this.getProductData();
    if (ls) {
      this.productList.next(ls);
    }
  }

  // get cart data from local storage
  getProductData() {
    return JSON.parse(localStorage.getItem('cartData'));
  }

  // save cart data in local storage
  setProduct(product: any) {
    localStorage.setItem('cartData', JSON.stringify(product));
    this.productList.next(this.getProductData());
  }

  // add products to cart
  addToCart(product: any) {
    const ls = this.getProductData();

    let exist: PRODUCT[];
    if (ls) {
      exist = ls.find((item) => {
        return item.id === product.productId;
      })
    }
    if (exist) {
      this.setProduct(ls);
    } else {
      if (ls) {
        const newData = [...ls, product];
        this.setProduct(newData);
        this.productList.next(this.getProductData());
      } else {
        this.cartDataList.push(product);
        this.setProduct(this.cartDataList);
      }
    }
    this.getTotalAmount();
  }

  // calculate total amount of products
  getTotalAmount() {
    let grandTotal = 0;
    const ls = this.getProductData();
    if (ls) {
      ls.forEach((item) => {
        grandTotal += item.productPrice;
      })
    }
    return grandTotal;
  }
}
