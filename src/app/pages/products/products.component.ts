import { Component, OnInit } from '@angular/core';
import { PRODUCT } from 'src/models/product.model';
import { ProductsService } from 'src/services/products.service';
import Games from '../../../assets/products.json';

// export interface PRODUCT {
//   productId: number;
//   productCode: string;
//   productName: string;
//   productTitle: string;
//   productSubTitle: string;
//   productDescription: string;
//   productPlatform: string;
//   productSmallImage: string;
//   productPrice: number;
// }

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public Product: PRODUCT[] = [];

  constructor(
    private productService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.Product = data;
    });
  }

}
