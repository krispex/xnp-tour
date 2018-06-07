import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CourseService }  from '../course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  @Input() course: Course;
  @Input() currentDate: number;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCourse();
  }

  getCourse(){
    const idx = +this.route.snapshot.paramMap.get('id');
    this.currentDate = +this.route.snapshot.paramMap.get('dateIndex');
    this.courseService.getCourse(idx)
      .subscribe(coursey => this.course = coursey);
    // this.courseService.getCourse(idx)
    //   .subscribe(coursey => this.currentDate = coursey.date[datex]);
    //console.log(this.course);
    //console.log(idx);
  }
}
