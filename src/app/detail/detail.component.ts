import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../products/products.component';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
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
  @Input() product: Product
  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute
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
  getProducts():void {
    this.productService.getProducts()
      .subscribe(products =>{
        this.products = products;
      });
  }
  addToCart(product:Product){
    this.productService.addToCart(product)
    this.cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
  }

}
