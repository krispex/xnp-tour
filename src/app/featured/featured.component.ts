import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { NewCourse } from '../newCourse';

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

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getCourses();
    this.organizeCoursesArray();
    this.sortCourses();
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
}
