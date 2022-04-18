import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked,
  OnDestroy} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewChecked, AfterContentChecked,
                              OnDestroy, AfterViewChecked  {

  constructor() { 
    console.log("contructor")
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  ngDoCheck(): void {
    console.log("ngDoCheck")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges")
  }

  ngOnInit(): void {
    console.log("ngOnInit")
  }

}
