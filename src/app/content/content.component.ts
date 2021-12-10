import { Component, DoCheck, OnInit } from '@angular/core';
import { ShowCompnentService } from '../Services/show-compnent.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit, DoCheck {
  playMusic=false;
  constructor(private showComponent: ShowCompnentService) {}
  ngDoCheck(): void {
    this.playMusic=this.showComponent.playMusic;
  }

  ngOnInit(): void {}
  showPlay(event:any) {
    event.stopPropagation();
    this.playMusic=!this.showComponent.playMusic;
    this.showComponent.playMusic = this.playMusic;
    this.showComponent.showPlayCurrent = true;
  }
}
