import { Component, OnInit } from '@angular/core';
import { EntranceType } from 'src/app/models/types/entranceType';

@Component({
  selector: 'app-locals-roows-add',
  templateUrl: './locals-roows-add.component.html',
  styleUrls: ['./locals-roows-add.component.css'],
  preserveWhitespaces: true
})
export class LocalsRoowsAddComponent implements OnInit {

  disabled: boolean = true;

  entrances: EntranceType;
  keys: string[];

  constructor() {
    this.keys = Object.keys(this.entrances).filter(f => !isNaN(Number(f)));
  }

  ngOnInit() {
  }

}
