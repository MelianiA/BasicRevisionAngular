import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataArray:any

  constructor(private http: HttpClient) {
   }

  ngOnInit(): void {
  }
 
  get(f:any){
    console.log(f.value)
  }

}
