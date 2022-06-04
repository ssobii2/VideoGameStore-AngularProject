import { Component, OnInit } from '@angular/core';
import Games from '../../../assets/products.json';

export interface PRODUCT {
  productId: number;
  productCode: string;
  productName: string;
  productTitle: string;
  productSubTitle: string;
  productDescription: string;
  productPlatform: string;
  productSmallImage: string;
  productPrice: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public Product: PRODUCT[] = Games;

  constructor() { }

  ngOnInit(): void {
  }

}
