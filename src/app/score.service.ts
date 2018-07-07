import { Injectable } from '@angular/core';
import { Score } from './score';
import { SCORES } from './scores';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  getScores(): Observable<Score[]> {
    return of(SCORES);
  }

  constructor() { }
}
