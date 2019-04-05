import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../shared/player';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-playerdetail',
  templateUrl: './playerdetail.component.html',
  styleUrls: ['./playerdetail.component.scss']
})
export class PlayerdetailComponent implements OnInit {

  player: Player;

  constructor(private playerservice: PlayerService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    let number = this.route.snapshot.params['number'];
    this.player = this.playerservice.getPlayer(number);
  }

  goBack(): void{
    this.location.back();
  }

}
