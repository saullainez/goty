import { Component, OnInit } from '@angular/core';
import { Game } from '../../interfaces/interfaces';
import { GameService } from '../../services/game.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  games: Game[] = [];

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.gameService.getNominados()
      .subscribe( resp => {
        this.games = resp;
      });
  }

  voteGame( id: string ){
    this.gameService.voteGame(id).subscribe( (resp:any) => {
      if( resp.ok ){
        Swal.fire('Gracias', resp.message, 'success');
      }else{
        Swal.fire('Ooops', resp.message, 'error');
      }
    })
  }

}
