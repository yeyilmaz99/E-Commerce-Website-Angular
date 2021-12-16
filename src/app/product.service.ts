import { ProductData } from './products/products.datasource';
import { Product } from './products/products.component';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cartProducts:Product[]= [];

  constructor() { }


  getProducts(): Observable<Product[]> {
    return of(ProductData);
  }

  getProduct(id:number): Observable<Product>{
    return of(ProductData.find(product => product.id === id));
  }
  addToCart(product:Product):void{
    this.cartProducts.push(product);
    console.log(this.cartProducts)
    localStorage.setItem("cartProducts", JSON.stringify(this.cartProducts));
  }
}
