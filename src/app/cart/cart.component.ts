import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../products/products.component';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as CounterActions from '../actions/counter.actions';
import { Counter } from '../models/counter.model';
import Swal from 'sweetalert2';


interface AppState {
  counter: Counter
}


@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: Product[] = JSON.parse(localStorage.getItem('cartProducts'));
  products: Product[];
  faTimes = faTimes;
  totalPrice: number;
  totalPriceDollar: number;
  cargoPrice: number = 10;
  discount: Boolean = false;
  noProducts: boolean;
  counter: Observable<Counter>


  constructor(
    private store: Store<AppState>,
    private productService: ProductService,
    private http: HttpClient,
    private toastr: ToastrService
  ) { this.counter = this.store.select('counter'); }

  ngOnInit(): void {
    this.getProducts();
    this.total();
    this.isEmpty();
  }
  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => {
        this.products = products;
      });
  }
  saveToCart(product: Product) {
    this.productService.addToCart(product);
    this.cartProducts.push(product);
    this.total();
    this.isEmpty();
    this.upvote();
    Swal.fire('Whooa', 'Product has been added to cart', 'success');
  }
  total(): void {
    let total = 0;
    for (let product of this.cartProducts) {
      total += product.price;
    }
    this.totalPrice = total;
    this.totalPriceDollar = Math.round(this.totalPrice / 14.82);

  }
  length() {
    return this.cartProducts.length;
  }
  delete(product: Product): void {
    
    for (let i = 0; i < this.cartProducts.length; i++) {
      if (this.cartProducts[i].id === product.id) {
        this.cartProducts.splice(i, 1);
        this.productService.cartProducts.splice(i, 1);
        localStorage.setItem("cartProducts", JSON.stringify(this.cartProducts));
        this.toastr.warning('Product has been deleted', 'Attention!');
        console.log("tıklandı");
        this.downvote();
      }
    }
    this.total();
    this.isEmpty();
  }
  discountClick() {
    this.discount = true;
  }
  isEmpty() {
    if (this.cartProducts.length == 0) {
      this.noProducts = true;
    } else {
      this.noProducts = false;
    }
  }
  downvote() {
    this.store.dispatch(new CounterActions.Downvote());
  }
  upvote() {
    this.store.dispatch(new CounterActions.Upvote());
  }
  deleteAlert(product:Product) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        for (let i = 0; i < this.cartProducts.length; i++) {
          if (this.cartProducts[i].id === product.id) {
            this.cartProducts.splice(i, 1);
            this.productService.cartProducts.splice(i, 1);
            localStorage.setItem("cartProducts", JSON.stringify(this.cartProducts));
            this.toastr.warning('Product has been deleted', 'Attention!');
            console.log("tıklandı");
            this.downvote();
          }
        }
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
      this.total();
      this.isEmpty();
    })
  }

}
