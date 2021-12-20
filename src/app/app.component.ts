import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActionMusicService } from './Services/action-music.service';
import { ShowCompnentService } from './Services/show-compnent.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, DoCheck {
  disHeight: any;
  showPlayCurrent: boolean | undefined;
  constructor(
    private actionMusic: ActionMusicService
  ) {}
  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
    this.showPlayCurrent = this.actionMusic._showPlayCurrent;
    if (this.actionMusic._showPlayCurrent == true) {
      this.disHeight = '90';
    }
  }

  ngOnInit(): void {}
  title = 'zingmp3';
}
