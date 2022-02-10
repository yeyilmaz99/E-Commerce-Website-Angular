import { Router } from '@angular/router' ;
import { Component, OnInit } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Counter } from '../models/counter.model';

interface AppState{
  counter: Counter
}


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  counter:Observable<Counter>
  isActive:boolean = true;
  faCartPlus = faCartPlus;
  text:string;

  constructor(
    private store:Store<AppState>,
    public router:Router
    ) { this.counter = this.store.select('counter') }

  ngOnInit(): void {
  }

}
