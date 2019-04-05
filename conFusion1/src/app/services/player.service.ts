import { Injectable } from '@angular/core';

import { Player } from '../shared/player';
import { PLAYERS } from '../shared/players';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  getPlayers(): Player[] {
    return PLAYERS;
  }

  getPlayer(number: number): Player{
    return PLAYERS.filter((player) => (player.number === number))[0];
  }

  getFeaturedDish(): Player {
    return PLAYERS.filter((player) => player.playername)[0];
  }

}
