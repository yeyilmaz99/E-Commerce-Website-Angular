import { ProductService } from './../product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { OrderByPipe } from '../order-by.pipe';
import { MatPaginator } from '@angular/material/paginator';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as CounterActions from '../actions/counter.actions';
import { Counter } from '../models/counter.model';

interface AppState{
  counter:Counter
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  faCartPlus = faCartPlus
  @ViewChild(MatPaginator) paginator: MatPaginator;
  cartProducts: Product[] = JSON.parse(localStorage.getItem("cartProducts"));
  selectedProduct:Product;
  // products: Product[]= JSON.parse(localStorage.getItem('products'));
  productSlice:Product[] = JSON.parse(localStorage.getItem('products')).slice(0,12);
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  badgeContent: number;
  counter:Observable<Counter>

  products: Product[] = [];
  dataLoaded: boolean = false;

  constructor(
    private store:Store<AppState>,
    private productService:ProductService, 
    private order:OrderByPipe,
    ) {
      this.badgeContent = this.cartProducts.length
      this.counter = this.store.select('counter');
    }
  ngOnInit(): void {
    this.getProducts();
  }

  // getProducts():void{
  //   this.products = JSON.parse(localStorage.getItem("products"));
  // }
  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }
  OnPageChange(event:PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.products.length) {
      endIndex = this.products.length;
    }
    this.productSlice = this.products.slice(startIndex, endIndex);
  }
  onSelect(product:Product):void{
    this.selectedProduct = product
  }


  sortHigh(){
    this.products= this.order.transform(this.products,'price','desc')
    this.productSlice = this.products.slice(0,12);
    this.paginator.firstPage();
  }

  sortLow(){
    this.products= this.order.transform(this.products,'price','asc')
    this.productSlice = this.products.slice(0,12)
    this.paginator.firstPage();
  }

  sortAll(){
    this.products= this.order.transform(this.products,'id','asc')
    this.productSlice = this.products.slice(0,12)
    this.paginator.firstPage();
  }
  addToCart(product:Product){
    this.productService.addToCart(product);
    this.cartProducts= JSON.parse(localStorage.getItem("cartProducts"));
    this.badgeContent = this.cartProducts.length;
    Swal.fire('Whooa', 'Product has been added to cart', 'success');
    this.upvote();
  }
  returnLength(){
    return this.cartProducts.length
  }
  paginatorLength(){
    return this.products?.length
  }

  upvote(){
    this.store.dispatch(new CounterActions.Upvote());
  }
  downvote(){
    this.store.dispatch(new CounterActions.Downvote());
  }


}

// export class Product {
//   id: number;
//   name: string;
//   description: string;
//   imageUrl: string;
//   price:number;
// }

export interface Photo {
  id: number;
  path: string;
}

export interface Product {
  productId: number,
  categoryId: number,
  productName: string,
  unitsInStock: number,
  unitPrice: number
}



