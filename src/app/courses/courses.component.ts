import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  
  courses: Course[];

  getCourses(): void {
    this.courseService.getCourses()
    .subscribe(courses => this.courses = courses);
  }
  
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getCourses();
  }

}
