import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[]

  constructor(private productService:ProductService) {}
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts():void {
    this.products = this.productService.getProducts();
  }


}

export class Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price:number;
}
