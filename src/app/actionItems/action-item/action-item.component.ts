import {Component, OnInit} from '@angular/core';
import {Options} from 'ng5-slider';

@Component({
  selector: 'app-action-item',
  templateUrl: './action-item.component.html',
  styleUrls: ['./action-item.component.scss']
})
export class ActionItemComponent implements OnInit {
  options: Options = {
    showTicksValues: true,
    stepsArray: [
      {value: 10},
      {value: 20},
      {value: 30},
      {value: 40},
      {value: 50},
      {value: 60},
      {value: 70},
      {value: 80},
      {value: 90},
      {value: 100}
    ]
  };

  constructor() {
  }

  ngOnInit() {
  }

}
