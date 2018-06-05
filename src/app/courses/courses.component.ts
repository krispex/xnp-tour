import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  selectedCourse: Course;
  courses: Course[];

  getCourses(): void {
    this.courseService.getCourses()
        .subscribe(courses => this.courses = courses);
  }

  onSelect(course: Course): void {
    this.selectedCourse = course;
    console.log("clicked" + ' ' + course.name);
  }
  
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getCourses();
  }

}
