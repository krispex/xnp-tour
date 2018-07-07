import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { FeaturedComponent } from './featured/featured.component';
import { PlayersComponent } from './players/players.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { TypsComponent } from './typs/typs.component';

const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'course/:id/:date', component: CourseDetailComponent },
  { path: '', component: FeaturedComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'player/:id', component: PlayerDetailComponent },
  { path: 'typs', component: TypsComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}