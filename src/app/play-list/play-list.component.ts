import { Component, DoCheck, OnInit } from '@angular/core';
import { ShowCompnentService } from '../Services/show-compnent.service';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss'],
})
export class PlayListComponent implements OnInit, DoCheck {
  showPlaylist = false;
  step="step1";
  constructor(private showComponent: ShowCompnentService) {}
  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
    this.showPlaylist = this.showComponent.showPlayList;
  }

  ngOnInit(): void {}

}
