import { Component, Input, OnInit } from '@angular/core';
import { Point } from '../../utils/point';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-bonus-progress-bar[point]',
  templateUrl: './bonus-bar.component.html',
  styleUrls: ['./bonus-bar.component.scss'],
})
export class BonusBarComponent implements OnInit {
  @Input() point: Point;
  public progress: boolean[] = [];
  flat_bonus(value: number) {
    for (let i = 0; i < this.config.DAILY_BONUS_GRANT; i++) {
      this.progress[i] = i < value;
    }
  }
  ngOnChanges() {
    this.flat_bonus(this.point.value);
  }
  constructor(private config: ConfigService) {}

  ngOnInit() {}
}
