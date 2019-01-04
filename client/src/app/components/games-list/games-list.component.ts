import { Component, OnInit, HostBinding } from '@angular/core';

import { GameService } from '../../services/game.service'

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  @HostBinding('class') class= 'row';

  games: any = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGames();
  }

  getGames(){
    this.gameService.getGames().subscribe(
      // res => console.log(res),
      res => {
        this.games = res;
      },
      err => console.error(err)
    );
  }

  deleteGame(id: string){
    console.log(id);
    this.gameService.deleteGame(id)
        .subscribe(
          res => {
            console.log(res);
            this.getGames();
          },
          err => console.log(err)
        );
  }

  editGame(id: string){
    console.log(id);
  }

}
