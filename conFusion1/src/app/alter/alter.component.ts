import { Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Player, Nationality } from '../shared/player';

@Component({
  selector: 'app-alter',
  templateUrl: './alter.component.html',
  styleUrls: ['./alter.component.scss']
})
export class AlterComponent implements OnInit {

  @ViewChild('fform') alterFormDirective;

  alterForm: FormGroup;
  player: Player;
  nationality = Nationality;

  constructor(private pl: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.alterForm = this.pl.group({
      playername: ['', Validators.required ],
      number: ['', Validators.required ],
      position: ['', Validators.required ],
      nationality: false,
    });
  }

  onSubmit() {
    this.player = this.alterForm.value;
    console.log(this.player);
    this.alterForm.reset({
      playername: '',
      number: '',
      position: '',
      nationality: false,
    });
    this.alterFormDirective.resetForm();
    // document.getElementById("information").innerHTML = "修正成功しました";
    console.log("修正成功しました");
  }

}
