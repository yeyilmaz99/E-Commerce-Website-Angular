import { Product } from './products/products.component';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from './models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://localhost:44374/api/';
  cartProducts:Product[]= [];
  data:Product[]=[];
  private apiProductsUrl = 'api/products'
  constructor(private http:HttpClient) { }


  getProducts(): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + 'products/getall';
    return this.http.get<ListResponseModel<Product>>(newPath);
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
