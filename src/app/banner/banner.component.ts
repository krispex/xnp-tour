import { Component, OnInit } from '@angular/core';
import { Score } from '../score';
import { ScoreService } from '../score.service';
import { TotalScore } from '../totalScore';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  scores: Score[];
  totalScores: TotalScore[] = [];

  constructor(
    private scoreService: ScoreService
  ) { }

  


  ngOnInit() {
    // When the user scrolls the page, execute myFunction 
    window.onscroll = function() {myFunction()};

    // Get the header
    var header = document.getElementById("myHeader");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;
    //console.log(sticky);

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }

    this.getScores();
    this.organizeScoresArray();
    this.sortScores();
    this.setPOS();
  }

  getScores(){
    this.scoreService.getScores()
      .subscribe(scorey => this.scores = scorey);
    console.log(this.scores);
  }

  organizeScoresArray(){
    let y = 0;
    for(let i = 0; i < this.scores.length; i++){
      if(Number(this.scores[i].id) == i+1){
        let newScore = {
          pos:0,
          id:this.scores[i].id,
          name:this.scores[i].name,
          totalScore:0        
        }
        for(let x = 0; x < 18; x++){
          newScore.totalScore += Number(this.scores[i]["hole"+(x+1)]);
        }
        this.totalScores.push(newScore);
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
    this.totalScores.sort(compare);
    this.totalScores.length = 3;
  }

  setPOS(){
    for(let i = 0; i < this.totalScores.length; i++){
      this.totalScores[i].pos = i+1;
    }
    console.log(this.totalScores);
  }

}
