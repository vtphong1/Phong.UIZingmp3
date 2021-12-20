import { Component, DoCheck, OnInit } from '@angular/core';
import { ActionMusicService } from '../Services/action-music.service';
import { HttpServiceService } from '../Services/http-service.service';
import { ShowCompnentService } from '../Services/show-compnent.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit, DoCheck {
  songs: any[] | undefined;
  playMusic = false; //Chưa chơi nhạc
  currentId: number | undefined; //Id nhạc
  constructor(
    private actionMusic: ActionMusicService,
    private serviceCommom: HttpServiceService
  ) {}
  ngDoCheck(): void {
    this.playMusic = this.actionMusic._playMusic;
  }

  getMusic(item: any, event: any) {
    event.stopPropagation(); // Không bị ảnh hưởng đến router bên ngoài
    const dataId = event.target.getAttribute('data-id');

    if (this.currentId && this.currentId != dataId) {
      this.playMusic = false;
    }
    if (
      this.playMusic == false &&
      this.currentId != event.target.getAttribute('data-id')
    ) {
      this.actionMusic.playMusic$.next(item);
      this.currentId = event.target.getAttribute('data-id');
    }
    this.actionMusic._playMusic = !this.playMusic;
    this.actionMusic._showPlayCurrent = true;
  }

  ngOnInit(): void {
    this.serviceCommom.getSongs().subscribe((data) => {
      this.songs = data;
    });

    this.actionMusic.playMusic$.subscribe((item) => {
      this.currentId = item.id;
    });
  }
}
