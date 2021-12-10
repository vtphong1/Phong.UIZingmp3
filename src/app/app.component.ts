import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ShowCompnentService } from './Services/show-compnent.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, DoCheck {
  disHeight:any;
  showPlayCurrent: boolean | undefined;
  constructor(private showComponent: ShowCompnentService) {}
  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
    this.showPlayCurrent = this.showComponent.showPlayCurrent;
    if(this.showComponent.showPlayCurrent==true){
      this.disHeight="90";
    }
  }

  ngOnInit(): void {}
  title = 'zingmp3';
}
