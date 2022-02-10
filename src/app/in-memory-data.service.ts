import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {


  createDb(){
    const products = [
      {id:1,name:"Product 1",description:"good product",imageUrl:"assets/images/product6.jpg",price:30650},
      {id:2,name:"Product 2",description:"good product",imageUrl:"assets/images/product6.jpg",price:20452},
      {id:3,name:"Product 3",description:"good product",imageUrl:"assets/images/product6.jpg",price:224562},
      {id:4,name:"Product 4",description:"good product",imageUrl:"assets/images/product6.jpg",price:20453},
      {id:5,name:"Product 5",description:"good product",imageUrl:"assets/images/product6.jpg",price:15427},
      {id:6,name:"Product 6",description:"good product",imageUrl:"assets/images/product6.jpg",price:20541},
      {id:7,name:"Product 7",description:"good product",imageUrl:"assets/images/product6.jpg",price:14544},
      {id:8,name:"Product 8",description:"good product",imageUrl:"assets/images/product6.jpg",price:12547},
      {id:9,name:"Product 9",description:"good product",imageUrl:"assets/images/product6.jpg",price:21544},
      {id:10,name:"Product 10",description:"good product",imageUrl:"assets/images/product6.jpg",price:13541},
      {id:11,name:"Product 11",description:"good product",imageUrl:"assets/images/product6.jpg",price:14533},
      {id:12,name:"Product 12",description:"good product",imageUrl:"assets/images/product6.jpg",price:13455},
      {id:13,name:"Product 13",description:"good product",imageUrl:"assets/images/product6.jpg",price:15437},
      {id:14,name:"Product 14",description:"good product",imageUrl:"assets/images/product6.jpg",price:13459},
      {id:15,name:"Product 15",description:"good product",imageUrl:"assets/images/product6.jpg",price:14537},
      {id:16,name:"Product 16",description:"good product",imageUrl:"assets/images/product6.jpg",price:1538},
      {id:17,name:"Product 17",description:"good product",imageUrl:"assets/images/product6.jpg",price:145639},
      {id:18,name:"Product 18",description:"good product",imageUrl:"assets/images/product6.jpg",price:18541},
      {id:19,name:"Product 19",description:"good product",imageUrl:"assets/images/product6.jpg",price:185463},
      {id:20,name:"Product 20",description:"good product",imageUrl:"assets/images/product6.jpg",price:1845},
      {id:21,name:"Product 21",description:"good product",imageUrl:"assets/images/product6.jpg",price:184567},
      {id:22,name:"Product 22",description:"good product",imageUrl:"assets/images/product6.jpg",price:1945},
      {id:23,name:"Product 23",description:"good product",imageUrl:"assets/images/product6.jpg",price:8795},
      {id:24,name:"Product 24",description:"good product",imageUrl:"assets/images/product6.jpg",price:4569},
      {id:25,name:"Product 25",description:"good product",imageUrl:"assets/images/product6.jpg",price:2005},
      {id:26,name:"Product 26",description:"good product",imageUrl:"assets/images/product6.jpg",price:1949},
      {id:27,name:"Product 27",description:"good product",imageUrl:"assets/images/product6.jpg",price:6547},
      {id:28,name:"Product 28",description:"good product",imageUrl:"assets/images/product6.jpg",price:3478},
      {id:29,name:"Product 29",description:"good product",imageUrl:"assets/images/product6.jpg",price:3589},
      {id:30,name:"Product 30",description:"good product",imageUrl:"assets/images/product6.jpg",price:468},
      {id:31,name:"Product 31",description:"good product",imageUrl:"assets/images/product6.jpg",price:1154},
      {id:32,name:"Product 32",description:"good product",imageUrl:"assets/images/product6.jpg",price:358},
      {id:33,name:"Product 33",description:"good product",imageUrl:"assets/images/product6.jpg",price:5000},
      {id:34,name:"Product 34",description:"good product",imageUrl:"assets/images/product6.jpg",price:400},
      {id:35,name:"Product 35",description:"good product",imageUrl:"assets/images/product6.jpg",price:900},
      {id:36,name:"Product 36",description:"good product",imageUrl:"assets/images/product6.jpg",price:300},
    ]
    return {products};
    
  }
  constructor() { }
}
