import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicDetailComponent } from './music-detail/music-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import{ContentComponent} from './content/content.component'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CurrentplayComponent } from './currentplay/currentplay.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  { path: 'detail', component: MusicDetailComponent },
  {path:'play', component: CurrentplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
