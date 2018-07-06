import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player';
import { PlayerService } from '../player.service';

import { CourseService }  from '../course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  @Input() course: Course;
  @Input() currentDate: string;
  courseID: number;
  courseDate: string;
  players: Player[];

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private location: Location,
    private playerService: PlayerService
  ) { }

  ngOnInit() {
    this.getCourse();
  }

  getCourse(){
    const idx = +this.route.snapshot.paramMap.get('id');
    this.currentDate = this.route.snapshot.paramMap.get('date');
    this.courseService.getCourse(idx)
      .subscribe(coursey => this.course = coursey);
    // this.courseService.getCourse(idx)
    //   .subscribe(coursey => this.currentDate = coursey.date[datex]);
    //console.log(this.currentDate);
    if(this.course){
      this.courseDate = this.course.date.find(date => {
        //console.log(this.currentDate);
        return date === this.currentDate;
      });
      this.courseID = this.course.id;
    }
    
    
    //console.log(idx);
  }

  getPlayers(): void {
    this.playerService.getPlayers()
        .subscribe(players => this.players = players);
  }
}
