import {
  AfterContentChecked,
  Component,
  DoCheck,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActionMusicService } from '../Services/action-music.service';
import { ShowCompnentService } from '../Services/show-compnent.service';

@Component({
  selector: 'app-currentplay',
  templateUrl: './currentplay.component.html',
  styleUrls: ['./currentplay.component.scss'],
})
export class CurrentplayComponent implements OnInit, DoCheck {
  currentMusic: any;
  @ViewChild('audio') audio: ElementRef | undefined;
  progressPercent: any;
  currentTime: any;
  durationTime: any;
  pause = false;
  playMusic = false; //Phát nhạc
  styleOne = false;
  animate = 'spin 3s linear infinite';
  transformMusic = false;
  constructor(private actionMusic: ActionMusicService) {}

  ngDoCheck(): void {
    this.playMusic = this.actionMusic._playMusic;
    if (this.playMusic == true) {
      this.animate = 'running';
      this.audio?.nativeElement.play();
    } else {
      this.animate = 'paused';
      this.audio?.nativeElement.pause();
    }
  }

  ngOnInit(): void {
    this.actionMusic.playMusic$.subscribe((item) => {
      this.currentMusic = item;
      this.audio?.nativeElement.load();
      this.audio?.nativeElement.play();
    });
  }
  onTimeupdate(e: any) {
    if (this.audio?.nativeElement.duration) {
      this.progressPercent = Math.floor(
        (this.audio?.nativeElement.currentTime /
          this.audio?.nativeElement.duration) *
          100
      );
    }
    this.currentTime = Math.ceil(this.audio?.nativeElement.currentTime) * 1000;
    this.durationTime = Math.ceil(this.audio?.nativeElement.duration) * 1000;
  }
  seekTime(e: any) {
    if (this.audio) {
      const sTime = (this.audio?.nativeElement.duration / 100) * e.target.value;
      this.audio.nativeElement.currentTime = sTime;
    }
  }
  seekVolum(e: any) {
    if (this.audio) {
      const sVolum = (1 / 100) * e.target.value;
      this.audio.nativeElement.volume = sVolum;
    }
  }

  changeIcon() {
    this.playMusic = this.actionMusic._playMusic;
    this.actionMusic._playMusic=!this.actionMusic._playMusic;
  }
  showPlayList() {
    this.styleOne = !this.styleOne;
    this.actionMusic._showPlayList = !this.actionMusic._showPlayList;
  }
}
