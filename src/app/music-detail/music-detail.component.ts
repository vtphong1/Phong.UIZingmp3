import { Component, DoCheck, OnInit } from '@angular/core';
import { ActionMusicService } from '../Services/action-music.service';

@Component({
  selector: 'app-music-detail',
  templateUrl: './music-detail.component.html',
  styleUrls: ['./music-detail.component.scss'],
})
export class MusicDetailComponent implements OnInit, DoCheck {
  constructor(private actionMusic: ActionMusicService) {}
  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {

  }
}
