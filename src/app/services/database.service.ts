import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  data:Observable<string> = new Observable()
  constructor() { }

  getData()
  {
    this.data = new Observable(observer => 
      {
        setTimeout(() => {
          observer.next('first')
        }, 1000);

        setTimeout(() => {
          observer.next('second')
        }, 3000);

        setTimeout(() => {
          observer.next('third')
        }, 7000);

        setTimeout(() => {
          observer.complete()
        }, 10000);
      })
      return this.data
  }
}
