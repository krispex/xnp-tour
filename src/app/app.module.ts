import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { LeaderboardBannerComponent } from './leaderboard-banner/leaderboard-banner.component';
import { BannerComponent } from './banner/banner.component';
import { ContentComponent } from './content/content.component';
import { FeaturedComponent } from './featured/featured.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { PlayersComponent } from './players/players.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { TypsComponentComponent } from './typs-component/typs-component.component';
import { TypsComponent } from './typs/typs.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeaderboardBannerComponent,
    BannerComponent,
    ContentComponent,
    FeaturedComponent,
    FooterComponent,
    CoursesComponent,
    PlayersComponent,
    PlayerDetailComponent,
    CourseDetailComponent,
    TypsComponentComponent,
    TypsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
