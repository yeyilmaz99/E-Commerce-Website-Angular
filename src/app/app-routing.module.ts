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
  { path: '', component: HomeComponent, pathMatch:'full', },
  { path: 'about', component: AboutComponent , pathMatch:'full' },
  { path: 'contact', component: ContactComponent , pathMatch:'full' },
  { path: 'products', component: ProductsComponent , pathMatch:'full'},
  { path: 'detail/:id', component: DetailComponent , pathMatch:'full'},
  { path: 'cart', component: CartComponent , pathMatch:'full'},
  { path: 'stepper', component: StepperComponent , pathMatch:'full'}
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, {useHash:true})]
})
export class AppRoutingModule { }
