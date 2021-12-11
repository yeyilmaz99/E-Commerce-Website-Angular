import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { OrderByPipe } from '../order-by.pipe';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  selectedProduct:Product;
  products: Product[];
  productSlice:Product[];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;

  constructor(private productService:ProductService, 
    private order:OrderByPipe
    ) {}
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts():void {
    this.productService.getProducts()
      .subscribe(products =>{
        this.products = products;
      });
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
  onSelect(product:Product):void{
    this.selectedProduct = product
    console.log("productid"+product.id)
  }
  sortHigh(){
    let newarr = this.productSlice.sort((a,b) =>a.price - b.price);
    newarr= this.productSlice 
  }
  sortLow(){
    let newarr1= this.productSlice.sort((a,b)=> b.price - a.price);
    newarr1 = this.productSlice 
  }
  search(){
    this.productSlice= this.order.transform(this.productSlice,'price','desc')
    console.log(this.productSlice)
  }


}

export class Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price:number;
}
