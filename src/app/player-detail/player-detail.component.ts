import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  @Input() player: Player;
  players: Player[];
  currentPlayer: String;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService
  ) { }

  ngOnInit() {
    this.getPlayer();
  }

  getPlayer(){
    const idx = +this.route.snapshot.paramMap.get('id');
    this.currentPlayer = this.route.snapshot.paramMap.get('name');
    this.playerService.getPlayer(idx)
      .subscribe(coursey => this.player = coursey);
    // this.courseService.getCourse(idx)
    //   .subscribe(coursey => this.currentDate = coursey.date[datex]);
    //console.log(this.currentDate);
    // this.courseDate = this.course.date.find(date => {
    //   //console.log(this.currentDate);
    //   return date === this.currentDate;
    // });
    //console.log(idx);
  }

}
