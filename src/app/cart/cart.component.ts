import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../products/products.component';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

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
  noProducts:boolean;


  constructor(
    private productService:ProductService,
    private http:HttpClient,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
    this.getProducts();
    this.total();
    this.isEmpty();
  }
  getProducts():void{
    this.productService.getProducts()
      .subscribe(products =>{
        this.products = products;
      });
  }
  saveToCart(product:Product){
    this.productService.addToCart(product);
    this.cartProducts.push(product);
    this.total();
    this.isEmpty();
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
        this.toastr.warning('Product has been deleted','Attention!');
      }
    }
    this.total();
    this.isEmpty();
  }
  discountClick(){
    this.discount = true;
  }
  isEmpty(){
    if(this.cartProducts.length == 0){
      this.noProducts=true;
    }else{
      this.noProducts=false;
    }
  }

}
