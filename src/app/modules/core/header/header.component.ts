import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuState: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setMenuState(){
    this.menuState = !this.menuState;
    console.log(this.menuState);
    
  }

}
