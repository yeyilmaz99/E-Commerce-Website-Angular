import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';
import { Product } from './products/products.component';
import { ProductData } from './products/products.datasource';
@Injectable({
  providedIn: 'root'
})
@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  products = ProductData
  transform(value: Product[] , sortBy: any, order?: any): any[] {
    const sortOrder = order ? order : ''; // setting default ascending order
   
     return orderBy(value, [sortBy], [sortOrder]);
     }
   }
