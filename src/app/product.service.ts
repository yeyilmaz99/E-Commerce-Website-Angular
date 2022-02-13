import { Product } from './products/products.component';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cartProducts:Product[]= [];
  data:Product[]=[];
  private apiProductsUrl = 'api/products'
  constructor(private http:HttpClient) { }


  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`http://api.myshopapp.tk/v1/products`);
      // return this.http.get<Product[]>(this.apiProductsUrl);

  }

  getProduct(id:number): Observable<Product>{
    return this.http.get<Product>(`http://api.myshopapp.tk/v1/products/`+'/'+id);
    // return this.http.get<Product>(this.apiProductsUrl+'/'+id);
  }
  addToCart(product:Product):void{
    this.cartProducts = JSON.parse(localStorage.getItem('cartProducts'))
    this.cartProducts.push(product);
    if(localStorage.getItem("cartProducts") !== "true" ){
      localStorage.setItem("cartProducts", JSON.stringify(this.cartProducts));
    }
  }
}
