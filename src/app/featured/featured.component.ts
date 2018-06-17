import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { newCourse } from '../newCourse';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  courses: Course[];
  initialize: boolean = true;
  newCourses: newCourse[] = [];
  sortedCourses: newCourse[];

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
    console.log(this.newCourses);
  }

  sortCourses(){
    function compare(a,b) {
      if (a.date > b.date)
        return -1;
      if (a.date < b.date)
        return 1;
      return 0;
    }
    console.log(this.newCourses.sort(compare));
  }

  initializeTable(n) {
    var table, rows, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    //Set the sorting direction to ascending:
    dir = "asc"; 
    /*Make a loop that will continue until
    no switching has been done:*/
    while (this.initialize) {
      //start by saying: no switching is done:
      this.initialize = false;
      rows = table.getElementsByTagName("TR");
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
        if (dir == "desc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch= true;
            break;
          }
        } else if (dir == "asc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        this.initialize = true;
        //Each time a switch is done, increase this count by 1:
        switchcount ++;      
      } else {
        /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          this.initialize = true;
        }
      }
    }
  }
}
