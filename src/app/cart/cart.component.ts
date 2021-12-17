import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../products/products.component';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts:Product[] = JSON.parse(localStorage.getItem('cartProducts'));
  products:Product[];
  faTimes= faTimes;
  totalPrice:number;
  totalPriceDollar:number;
  cargoPrice:number = 10;
  discount:Boolean =false;


  constructor(
    private productService:ProductService,
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.getProducts();
    this.total();
  }
  getProducts():void{
    this.productService.getProducts()
      .subscribe(products =>{
        this.products = products;
      });
  }
  saveToCart(product:Product){
    this.productService.addToCart(product)
    this.cartProducts.push(product)
  }
  total():void{
    let total = 0;
    for(let product of this.cartProducts){
      total += product.price;
    }
    this.totalPrice = total;
    this.totalPriceDollar = Math.round(this.totalPrice/14.82);
    
  }
  length(){
    return this.cartProducts.length;
  }
  delete(product:Product):void{
    for(let i= 0; i<this.cartProducts.length;i++){
      if( this.cartProducts[i].id === product.id ){
        this.cartProducts.splice(i, 1);
        this.productService.cartProducts.splice(i, 1);
        localStorage.setItem("cartProducts", JSON.stringify(this.cartProducts));
      }
    }
    this.total()
    console.log(this.cartProducts);
  }
  discountClick(){
    this.discount = true;
  }

}
