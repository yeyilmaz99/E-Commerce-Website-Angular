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
  products: Product[] = [];
  dataLoaded: boolean = false;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
   this.getProducts()
  }
  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }

  onSelect(product:Product):void{
    this.selectedProduct = product
  }

}

