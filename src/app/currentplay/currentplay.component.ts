import { Component, DoCheck, OnInit } from '@angular/core';
import { ShowCompnentService } from '../Services/show-compnent.service';

@Component({
  selector: 'app-currentplay',
  templateUrl: './currentplay.component.html',
  styleUrls: ['./currentplay.component.scss'],
})
export class CurrentplayComponent implements OnInit, DoCheck {
  playMusic = false;
  styleOne=false;
  animate = 'spin 3s linear infinite';
  constructor(private showComponet: ShowCompnentService) {}
  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
    this.playMusic=!this.showComponet.playMusic;
    if (this.playMusic == false) {
      this.animate = 'running';
    } else {
      this.animate = 'paused';
    }
  }

  ngOnInit(): void {}
  changeIcon(event: any) {
    this.playMusic = !this.playMusic;
    this.showComponet.playMusic=!this.playMusic;

    if (this.playMusic == false) {
      this.animate = 'running';
    } else {
      this.animate = 'paused';
    }
  }
  showPlayList() {
    this.styleOne=!this.styleOne;
    this.showComponet.showPlayList = !this.showComponet.showPlayList;
  }
}
