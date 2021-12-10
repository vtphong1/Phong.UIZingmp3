import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.scss'],
})
export class SlidebarComponent implements OnInit, OnDestroy {

  constructor() {}
  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    const next = document.getElementsByClassName('next-img')[0];
    const previous = document.getElementsByClassName('previous-img')[0];
    const img: any = document.getElementsByClassName('slide-img');
    var x:any = 0;


    next.addEventListener('click', function () {
      x += 350;
      if (x > 700) {
        x = 0;
        img[2].style.zIndex = null;
        img[0].style.zIndex = null;
        img[0].style.transform = `translate(${x}px)`;
        img[1].style.transform = `translate(${x}px)`;
        img[2].style.transform = `translate(${x}px)`;
        img[1].style.zIndex = '1';
      } else if (x == 700) {
        img[1].style.zIndex = null;
        img[0].style.zIndex = null;
        img[2].style.transform = `translate(${-x / 2}px)`;
        img[1].style.transform = `translate(${-x / 2}px)`;
        img[0].style.transform = `translate(${x}px)`;
        img[2].style.zIndex = '1';
        img[0].style.zIndex = '1';
      } else if(x=350){
        img[1].style.zIndex = '1';
        img[0].style.zIndex = '1';
        img[1].style.transform = `translate(${x}px)`;
        img[0].style.transform = `translate(${x}px)`;
        img[2].style.transform = `translate(${-x*2}px)`;
      }
    })
    previous.addEventListener('click', function(){
      x += 350;
      if (x > 700) {
        x = 0;
        img[2].style.zIndex = null;
        img[0].style.zIndex = null;
        img[0].style.transform = `translate(${x}px)`;
        img[1].style.transform = `translate(${x}px)`;
        img[2].style.transform = `translate(${x}px)`;
        img[1].style.zIndex = '1';
      } else if (x == 700) {
        img[1].style.zIndex = null;
        img[0].style.zIndex = null;
        img[2].style.transform = `translate(${-x / 2}px)`;
        img[1].style.transform = `translate(${-x / 2}px)`;
        img[0].style.transform = `translate(${x}px)`;
        img[2].style.zIndex = '1';
        img[0].style.zIndex = '1';
      } else if ((x = 350)) {
        img[1].style.transform = `translate(${x}px)`;
        img[0].style.transform = `translate(${x}px)`;
        img[2].style.transform = `translate(${-x * 2}px)`;
        img[1].style.zIndex = '1';
        img[0].style.zIndex = '1';
      }
    })
    setInterval(()=>{
      x += 350;
      if (x > 700) {
        x = 0;
        img[2].style.zIndex = null;
        img[0].style.zIndex = null;
        img[0].style.transform = `translate(${x}px)`;
        img[1].style.transform = `translate(${x}px)`;
        img[2].style.transform = `translate(${x}px)`;
        img[1].style.zIndex = '1';
      } else if (x == 700) {
        img[1].style.zIndex = null;
        img[0].style.zIndex = null;
        img[2].style.transform = `translate(${-x / 2}px)`;
        img[1].style.transform = `translate(${-x / 2}px)`;
        img[0].style.transform = `translate(${x}px)`;
        img[2].style.zIndex = '1';
        img[0].style.zIndex = '1';
      } else if ((x = 350)) {
        img[1].style.transform = `translate(${x}px)`;
        img[0].style.transform = `translate(${x}px)`;
        img[2].style.transform = `translate(${-x * 2}px)`;
        img[1].style.zIndex = '1';
        img[0].style.zIndex = '1';
      }
    }, 10000)
  }

}
