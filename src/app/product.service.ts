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

  constructor(private http:HttpClient) { }


  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`http://spring-shop.eu-central-1.elasticbeanstalk.com/products/`);
  }

  getProduct(id:number): Observable<Product>{
    return this.http.get<Product>(`http://spring-shop.eu-central-1.elasticbeanstalk.com/products/`+'/'+id);
  }
  addToCart(product:Product):void{
    this.cartProducts = JSON.parse(localStorage.getItem('cartProducts'))
    this.cartProducts.push(product);
    if(localStorage.getItem("cartProducts") !== "true" ){
      localStorage.setItem("cartProducts", JSON.stringify(this.cartProducts));
    }
  }
}
