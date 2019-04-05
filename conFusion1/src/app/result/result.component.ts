import { Component, OnInit } from '@angular/core';
import { Player } from '../shared/player';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  players: Player[];
  // variable selectedDish
  selectedPlayer: Player;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

  onSelect(player:Player){
    this.selectedPlayer=player;
  }

}
