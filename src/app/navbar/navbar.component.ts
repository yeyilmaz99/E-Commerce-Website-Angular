import { Router } from '@angular/router' ;
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isActive:boolean = true;


  constructor(public router:Router) { }

  ngOnInit(): void {
  }

}
