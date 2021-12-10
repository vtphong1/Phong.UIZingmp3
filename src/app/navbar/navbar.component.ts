import { Component, DoCheck, OnInit } from '@angular/core';
import { ShowCompnentService } from '../Services/show-compnent.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, DoCheck {
  cusHeight = '327.39';
  constructor(private showComponent: ShowCompnentService) {
  }
  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
    if(this.showComponent.showPlayCurrent==true){
      this.cusHeight='233';
    }
  }

  ngOnInit(): void {
  }
}
