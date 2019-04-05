import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  clickMessage = this.clickMessage;

  constructor() { }

  ngOnInit() {
  }
  
  onClickMe() {
    this.clickMessage = '削除成功しました';
  }
}
