import { Injectable } from '@angular/core';
import { Player } from './player';
import { PLAYERS } from './players';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  getPlayers(): Observable<Player[]> {
    return of(PLAYERS);
  }
  
  constructor() { }

}
