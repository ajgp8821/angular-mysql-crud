import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Game } from '../models/Game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  API_URI = 'http://localhost:3300/api';

  // HttpClient permite hacer peticiones Http
  constructor(private http: HttpClient) { }

  // Método para pedir los juegos
  getGames() {
    return this.http.get(`${this.API_URI}/games`);
  }

  // Método para obtener un juego
  getGame(id: string){
    return this.http.get(`${this.API_URI}/games/${id}`);
  }

  // Métdo para guardar un juego
  saveGame(game: Game){
    return this.http.post(`${this.API_URI}/games`, game);
  }

  // Métdo para eliminar un juego
  deleteGame(id: string){
    return this.http.delete(`${this.API_URI}/games/${id}`);
  }

  // Métdo para actualizar un juego
  updateGame(id: string|number, updatedGame: Game): Observable<Game>{
    return this.http.put(`${this.API_URI}/games/${id}`, updatedGame);
  }
  
}
