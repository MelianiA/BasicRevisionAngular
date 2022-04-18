import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private db: DatabaseService) {
    
   }

  ngOnInit(): void {
  }

 get(){
   this.db.getData().subscribe(next => {
      console.log(next)
   }, 
   error => {
    console.log(error)

   },
   () => {
    console.log("complete")
   })
 }

}
