import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Product } from './products/products.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pixie Template';
  constructor(private router: Router,) { }
  cartProducts: Product[] = JSON.parse(localStorage.getItem('cartProducts'))

  ngOnInit(): void {
    this.scrollToTop();
    this.createCartProductList();
  }

  scrollToTop(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  createCartProductList() {
    if (localStorage.getItem("cartProducts") == null) {
      this.cartProducts = [];
      localStorage.setItem("cartProducts", JSON.stringify(this.cartProducts));
    }
  }
}
