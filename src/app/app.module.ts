import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CurrentplayComponent } from './currentplay/currentplay.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { ContentComponent } from './content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { NgImageSliderModule } from 'ng-image-slider';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MusicDetailComponent } from './music-detail/music-detail.component';
import { HomeComponent } from './home/home.component';
import { PlayListComponent } from './play-list/play-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Chartmp3Component } from './chartmp3/chartmp3.component';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    CurrentplayComponent,
    SlidebarComponent,
    ContentComponent,
    MusicDetailComponent,
    HomeComponent,
    PlayListComponent,
    Chartmp3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatIconModule,
    NgImageSliderModule,
    IvyCarouselModule,
    HttpClientModule,
    HighchartsChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
