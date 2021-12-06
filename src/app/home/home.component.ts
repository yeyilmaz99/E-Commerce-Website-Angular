import { Component, OnInit } from '@angular/core';
import { Product } from '../products/products.component';
import { ProductService } from '../product.service';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  selectedProduct:Product;

  products:Product[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
   this.getProducts()
  }
  getProducts():void {
    this.productService.getProducts()
        .subscribe(products=> {
          this.products = products;
        });
  }

  onSelect(product:Product):void{
    this.selectedProduct = product
  }

}

