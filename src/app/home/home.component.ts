import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 tab = ["Algérie","Maroc","Tunisie"]
 n = 'd'
  constructor() { }

  ngOnInit(): void {
  }

 

}
