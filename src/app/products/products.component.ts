import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[]
  productSlice:Product[]
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;

  constructor(private productService:ProductService) {}
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts():void {
    this.products = this.productService.getProducts();
    this.productSlice = this.products.slice(0,12)
  }
  OnPageChange(event:PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.products.length) {
      endIndex = this.products.length;
    }
    this.productSlice = this.products.slice(startIndex, endIndex);
  }


}

export class Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price:number;
}
