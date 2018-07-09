import { Component, OnInit } from '@angular/core';
import { Score } from '../score';
import { ScoreService } from '../score.service';
import { TotalScore } from '../totalScore';
import { PlayerService } from '../player.service';
import { Player } from '../player';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  scores: Score[];
  totalScores: TotalScore[] = [];
  players: Player[];

  constructor(
    private scoreService: ScoreService,
    private playerService: PlayerService
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
    this.getPlayers();
    this.getScores();
    this.organizeScoresArray();
    this.sortScores();
    this.setPOS();
  }

  getScores(){
    this.scoreService.getScores()
      .subscribe(scorey => this.scores = scorey);
  }

  getPlayers(){
    this.playerService.getPlayers()
      .subscribe(players => this.players = players);
  }

  organizeScoresArray(){
    let y = 0;
    for(let p = 0; p < this.players.length; p++){
      //loops for each player (4 times)
      let newScore = {
        pos:0,
        id:"0",
        name:"",
        totalScore:0
      }
      newScore.id = this.players[p].id.toString();
      newScore.name = this.players[p].name;
      
      for(let i = 0; i < this.scores.length; i++){
        //loops for each score in the score object (3 times)
        if(Number(this.scores[i].id) == p+1){
          //check to see if player exists in score object
          //if score.id 1 = 1
          for(let x = 0; x < 18; x++){
            //loop through all holes and add to total score
            newScore.totalScore += Number(this.scores[i]["hole"+(x+1)]);
          }
        }
      }
      this.totalScores.push(newScore);
      for(let i = 0; i < this.totalScores.length; i++){
        if(this.totalScores[i].totalScore == 0){
          this.totalScores.splice(i);
        }
      }
      console.log(this.totalScores);
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
  }

  setPOS(){
    for(let i = 0; i < this.totalScores.length; i++){
      this.totalScores[i].pos = i+1;
    }
  }

}
