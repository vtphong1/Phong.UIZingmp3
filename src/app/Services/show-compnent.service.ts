import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowCompnentService {
  public showPlayCurrent=false;
  public showPlayList=false;
  public playMusic=false;
  constructor() { }
}
