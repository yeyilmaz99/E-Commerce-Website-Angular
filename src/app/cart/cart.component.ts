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
  products:Product[];
  faTimes= faTimes;

  constructor(
    private productService:ProductService,
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts():void{
    this.productService.getProducts()
      .subscribe(products =>{
        this.products = products;
      });
  }

}
