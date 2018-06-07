import { Injectable } from '@angular/core';
import { Course } from './course';
import { COURSES } from './courses';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {

  // getCourses(): Observable<Course[]> {
  //   return of(COURSES);
  // }

  // getCourse(id: number): Observable<Course> {
  //   // TODO: send the message _after_ fetching the hero
  //   // this.messageService.add(`HeroService: fetched hero id=${id}`);
  //   return of(COURSES.find(course => course.id === id));
  // }

  getCourse(id: number): Observable<Course> {
    setTimeout(() => {
      console.log('1 seconds');
      //console.log(COURSES.find(course => course.id === id));
      
      return of(this.COURSES1[0].date[0] = 'test');
    }, 1000);
    return of(this.COURSES1.find(course => course.id === id));
  }

  getCourses(): Observable<Course[]> {
    return of(this.COURSES1);
  }

  
  COURSES1: Course[] = [{ id: 1, name: 'a', date: ['date1']}, { id: 2, name: 'b', date: ['date1', 'date2']}]


  

  constructor() { }

}
