import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';
import { StepperComponent } from './stepper/stepper.component';


const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'stepper', component: StepperComponent }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, {useHash:true})]
})
export class AppRoutingModule { }
