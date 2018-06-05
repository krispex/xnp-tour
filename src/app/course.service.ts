import { Injectable } from '@angular/core';
import { Course } from './course';
import { COURSES } from './courses';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {

  getCourses(): Observable<Course[]> {
    return of(COURSES);
  }

  getCourse(id: number): Observable<Course> {
    // TODO: send the message _after_ fetching the hero
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(COURSES.find(course => course.id === id));
  }

  constructor() { }

}
