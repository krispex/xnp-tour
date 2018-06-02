import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { COURSES } from '../courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses = COURSES;
  selectedCourse: Course;

  onSelect(course: Course): void {
    this.selectedCourse = course;
    console.log("clicked" + ' ' + course.name);
  }
  constructor() { }

  ngOnInit() {
  }

}
