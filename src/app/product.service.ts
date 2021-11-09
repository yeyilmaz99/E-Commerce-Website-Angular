import { ProductData } from './products/products.datasource';
import { Product } from './products/products.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }


  getProducts(): Product[] {
    return ProductData;
  }
}
