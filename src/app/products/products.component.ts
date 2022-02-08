import { ProductService } from './../product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { OrderByPipe } from '../order-by.pipe';
import { MatPaginator } from '@angular/material/paginator';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2/dist/sweetalert2.js';


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
  products: Product[];
  productSlice:Product[];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  badgeContent: number;

  constructor(
    private productService:ProductService, 
    private order:OrderByPipe,
    ) {
      this.badgeContent = this.cartProducts.length
    }
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts():void {
    this.productService.getProducts()
        .subscribe(products=> {
          this.products = products;
          this.productSlice = this.products.slice(0,12)          
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
  }
  returnLength(){
    return this.cartProducts.length
  }
  paginatorLength(){
    return this.products?.length
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

// export interface Product {
//   categories: string;
//   id: number;
//   photos: Photo[];
//   price: number;
//   subtitle: string;
//   title: string;
// }

export class Product {
  name:string;
  id:number;
  description:string;
  imageUrl:string;
  price:number;
}


