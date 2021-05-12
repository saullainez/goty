import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private games: Game[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getNominados() {
    if(this.games.length > 0){
      return of(this.games);
    }else{
      return this.http.get<Game[]>(`${ environment.url }/api/goty`).pipe(
        tap(
          games => this.games = games
        )
      );
    }
    
  }
}
