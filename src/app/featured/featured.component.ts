import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { NewCourse } from '../newCourse';
import { Score } from '../score';
import { ScoreService } from '../score.service';
import { NewScore } from '../newScore';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  courses: Course[];
  initialize: boolean = true;
  newCourses: NewCourse[] = [];
  sortedCourses: NewCourse[];
  scores: Score[];
  newScores: NewScore[] = [];

  constructor(
    private courseService: CourseService,
    private scoreService: ScoreService
  ) { }

  ngOnInit() {
    this.getCourses();
    this.organizeCoursesArray();
    this.sortCourses();
    this.getScores();
    this.organizeScoresArray();
    this.sortScores();
    this.setPOS();
  }

  getCourses(): void {
    this.courseService.getCourses()
    .subscribe(courses => this.courses = courses);
  }

  organizeCoursesArray(){
    let y = 0;
    for(let i = 0; i < this.courses.length; i++){
      for(let x = 0; x < this.courses[i].date.length; x++){
        let newCourse = {
          id:this.courses[i].id,
          name:this.courses[i].name,
          date:this.courses[i].date[x]
        }
        this.newCourses.push(newCourse);
        y++;
      }
    }
  }

  sortCourses(){
    function compare(a,b) {
      if (a.date > b.date)
        return -1;
      if (a.date < b.date)
        return 1;
      return 0;
    }
    this.newCourses.sort(compare);
  }

  getScores(){
    this.scoreService.getScores()
      .subscribe(scorey => this.scores = scorey);
  }

  organizeScoresArray(){
    let y = 0;
    for(let i = 0; i < this.scores.length; i++){
      if(this.newCourses[0].date == this.scores[i].date){
        let newScore = {
          pos:0,
          id:this.scores[i].id,
          name:this.scores[i].name,
          date:this.scores[i].date,
          hole1:"0",
          hole2:"0",
          hole3:"0",
          hole4:"0",
          hole5:"0",
          hole6:"0",
          hole7:"0",
          hole8:"0",
          hole9:"0",
          hole10:"0",
          hole11:"0",
          hole12:"0",
          hole13:"0",
          hole14:"0",
          hole15:"0",
          hole16:"0",
          hole17:"0",
          hole18:"0",
          totalScore:0        
        }
        for(let x = 0; x < 18; x++){
          newScore["hole"+(x+1)] = this.scores[i]["hole"+(x+1)];
          newScore.totalScore += Number(this.scores[i]["hole"+(x+1)]);
        }
        this.newScores.push(newScore);
      }
    }
  }

  sortScores(){
    function compare(a,b) {
      if (a.totalScore < b.totalScore)
        return -1;
      if (a.totalScore > b.totalScore)
        return 1;
      return 0;
    }
    this.newScores.sort(compare);
  }

  setPOS(){
    for(let i = 0; i < this.newScores.length; i++){
      this.newScores[i].pos = i+1;
    }
  }
}
