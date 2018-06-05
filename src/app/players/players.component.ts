import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  selectedPlayer: Player;
  players: Player[];

  getPlayers(): void {
    this.playerService.getPlayers()
        .subscribe(players => this.players = players);
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
    console.log("clicked" + ' ' + player.name);
  }

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.getPlayers();
  }

}
