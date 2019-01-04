import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { ActivatedRoute, Router } from '@angular/router'

import { GameService } from '../../services/game.service';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-games-form',
  templateUrl: './games-form.component.html',
  styleUrls: ['./games-form.component.css']
})
export class GamesFormComponent implements OnInit {

  // Hace que el selector tenga una clase con el valor 'row'
  @HostBinding('class') class = 'row';

  game: Game = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  }

  constructor(
    private gameService: GameService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ){}

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    // console.log("Parametros: ", params);
    if (params.id){
      this.gameService.getGame(params.id)
          .subscribe(
            res =>{
              console.log(res);
              this.game = res;
              this.edit = true;
            },
            err => console.log(err)
          );
    }
  }

  edit: boolean = false;

  saveNewGame(){
    // console.log(this.game);
    // Se elimina id y created_ad para que la bd los genere
    delete this.game.id;
    delete this.game.created_at;

    this.gameService.saveGame(this.game)
        .subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/games']);
          },
          err => console.log(err)
        );
  }

  updateGame(){
    // console.log(this.game);
    delete this.game.created_at;
    this.gameService.updateGame(this.game.id, this.game)
        .subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/games']);
          },
          err => console.log(err)
        );
  }

}
