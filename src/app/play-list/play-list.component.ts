import { Component, DoCheck, OnInit } from '@angular/core';
import { ActionMusicService } from '../Services/action-music.service';
import { ShowCompnentService } from '../Services/show-compnent.service';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss'],
})
export class PlayListComponent implements OnInit, DoCheck {
  showPlaylist = false;
  step = 'step1';
  listMusic: any[] = [];
  playMusic = false;
  currentId: any | undefined;

  constructor(private actionMusic: ActionMusicService) {}
  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
    this.showPlaylist = this.actionMusic._showPlayList;
    this.playMusic = this.actionMusic._playMusic;
  }

  ngOnInit(): void {
    this.actionMusic.playMusic$.subscribe((item) => {
      if (item != '') {
        if (this.listMusic.includes(item)) {
          this.currentId = item.id;
        } else {
          this.listMusic.push(item);
          this.currentId = item.id;
        }
      }
    });
  }
  changeMusic(item: any, e: any) {
    e.stopPropagation();
    const dataId = e.target.getAttribute('data-id');
    if (this.currentId && this.currentId != dataId) {
      this.playMusic = false;
    }
    if (
      this.playMusic == false &&
      this.currentId != e.target.getAttribute('data-id')
    ) {
      this.actionMusic.playMusic$.next(item);
      this.currentId = e.target.getAttribute('data-id');
    }
    this.playMusic = !this.playMusic;
    this.actionMusic._playMusic = this.playMusic;
  }
}
