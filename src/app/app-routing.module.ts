import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }      from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { FeaturedComponent } from './featured/featured.component';


const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: '', component: FeaturedComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}