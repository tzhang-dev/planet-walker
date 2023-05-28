import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../utils/player';
import { DAILY_BONUS_GRANT } from '../../utils/config';
import { Point } from '../../utils/point';

@Component({
  selector: 'app-bonus-progress-bar[point]',
  templateUrl: './bonus-bar.component.html',
  styleUrls: ['./bonus-bar.component.scss'],
})
export class BonusBarComponent implements OnInit {
  @Input() point: Point;
  public progress: boolean[] = [];
  flat_bonus(value: number) {
    for (let i = 0; i < DAILY_BONUS_GRANT; i++) {
      if (i < value) {
        this.progress[i] = true;
      } else {
        this.progress[i] = false;
      }
    }
  }
  ngOnChanges() {
    this.flat_bonus(this.point.value);
  }
  constructor() {}

  ngOnInit() {}
}
