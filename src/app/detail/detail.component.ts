import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../products/products.component';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { Store } from '@ngrx/store';
import * as CounterActions from '../actions/counter.actions';
import { Counter } from '../models/counter.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedIn= faLinkedin;
  faCartPlus= faCartPlus;
  cartProducts: Product[] = JSON.parse(localStorage.getItem("cartProducts"));
  products:Product[];
  dataLoaded: boolean;
  counter:Observable<Counter>
  @Input() product: Product
  constructor(
    private store:Store,
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.loadProducts();
    this.getProduct();
    this.getProducts();
  }
  
  loadProducts():void{
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      this.getProduct();
      this.getProducts();
  });
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe((product) => this.product = product)

  }
  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }
  addToCart(product:Product){
    this.productService.addToCart(product)
    this.cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    Swal.fire('Whooa', 'Product has been added to cart', 'success');
    this.upvote();
  }
  upvote(){
    this.store.dispatch(new CounterActions.Upvote());
  }

}
