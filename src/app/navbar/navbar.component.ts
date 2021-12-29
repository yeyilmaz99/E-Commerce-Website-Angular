import { Router } from '@angular/router' ;
import { Component, OnInit } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isActive:boolean = true;
  faCartPlus = faCartPlus;


  constructor(public router:Router) { }

  ngOnInit(): void {
  }

}
