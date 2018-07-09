import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { Course } from '../course';
import { CourseService }  from '../course.service';
import { Score } from '../score';
import { ScoreService } from '../score.service';
import { NewScore } from '../newScore';

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
  initialize: boolean = true;
  newScores: NewScore[] = [];
  sortedScores: NewScore[];

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
    this.organizeScoresArray();
    this.sortScores();
    this.setPOS();
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
  }

  organizeScoresArray(){
    let y = 0;
    for(let i = 0; i < this.scores.length; i++){
      if(this.currentDate == this.scores[i].date){
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
    console.log(this.newScores);
  }

  setPOS(){
    for(let i = 0; i < this.newScores.length; i++){
      this.newScores[i].pos = i+1;
    }
  }

  sortNameTable() {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc"; 
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.getElementsByTagName("TR");
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[1];
        y = rows[i + 1].getElementsByTagName("TD")[1];
        /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
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
        switching = true;
        //Each time a switch is done, increase this count by 1:
        switchcount ++;      
      } else {
        /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  sortStrokesTable() {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    dir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.getElementsByTagName("TR");
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[2];
        y = rows[i + 1].getElementsByTagName("TD")[2];
        //check if the two rows should switch place:
        if (dir == "asc") {
          if (Number(x.innerHTML) > Number(y.innerHTML)) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (Number(x.innerHTML) < Number(y.innerHTML)) {
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
        switching = true;
        //Each time a switch is done, increase this count by 1:
        switchcount ++;      
      } else {
        /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
}
