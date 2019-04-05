import { Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Player, Nationality } from '../shared/player';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  clickMessage = this.clickMessage;

  @ViewChild('fform') addFormDirective;

  addForm: FormGroup;
  player: Player;
  nationality = Nationality;
  

  constructor(private pl: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.addForm = this.pl.group({
      playername: ['', Validators.required ],
      number: ['', Validators.required ],
      position: ['', Validators.required ],
      nationality: false,
    });
  }

  onSubmit() {
    this.player = this.addForm.value;
    console.log(this.player);
    this.addForm.reset({
      playername: '',
      number: '',
      position: '',
      nationality: false,
    });
    this.addFormDirective.resetForm();
    console.log("追加成功しました");
  }

  onClickMe() {
    this.clickMessage = '追加成功しました';
  }

}
