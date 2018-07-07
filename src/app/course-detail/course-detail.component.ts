import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { Course } from '../course';
import { CourseService }  from '../course.service';
import { Score } from '../score';
import { ScoreService } from '../score.service';

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
  scores: Score[];
  numbers: number[];

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private location: Location,
    private playerService: PlayerService,
    private scoreService: ScoreService
  ) { 
    this.numbers = Array(18).fill(0).map((x,i)=>i);
  }

  ngOnInit() {
    this.getCourse();
    this.getScores();
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

  getScores(){
    this.scoreService.getScores()
      .subscribe(scorey => this.scores = scorey);
    console.log(this.scores);
  }

}
