import { Component, OnInit } from '@angular/core';
import { Product } from '../products/products.component';
import { ProductService } from '../product.service';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  products:Product[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
   this.getProducts()
  }
  getProducts():void {
    this.products = this.productService.getProducts();
  }

}

