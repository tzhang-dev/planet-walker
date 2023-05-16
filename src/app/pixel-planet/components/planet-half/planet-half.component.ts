import { Component, Input, OnInit } from '@angular/core';
import { CanvasComponent } from '../canvas/canvas.component';
import { HalfPlanetCanvas } from '../../utils/canvas';
import { NgIf } from '@angular/common';
import { planets } from '../../utils/planets';

@Component({
  selector: 'app-planet-half[side][planet_name]',
  templateUrl: './planet-half.component.html',
  styleUrls: ['./planet-half.component.scss'],
  standalone: true,
  imports: [CanvasComponent, NgIf],
})
export class PlanetHalfComponent implements OnInit {
  @Input() public side: 'left' | 'right' = 'left';
  @Input() public planet_name: keyof typeof planets = 'default';
  @Input() public show_bonus: boolean = true;
  @Input() show_grid: boolean = true;
  private _scores: number[] = [
    0, 13, 10, 3, 15, 0, 6, 13, 0, 10, 1, 13, 3, 15, 4, 9, 6, 13, 4, 6,
  ];
  public half_canvas?: HalfPlanetCanvas;
  @Input() set scores(scores: number[]) {
    this._scores = scores;
    this.half_canvas?.flat_from_score_to_planet(this.scores);
    this.flat_bonus();
  }
  constructor() {}

  ngOnInit() {
    this.half_canvas = new HalfPlanetCanvas(this.side);
    this.half_canvas.set_bg_img(planets[this.planet_name][this.side]);
    this.half_canvas.flat_from_score_to_planet(this._scores);
    this.flat_bonus();
  }
  private flat_bonus() {
    if (this.show_bonus) {
      this.half_canvas?.flat_from_score_to_bonus(this._scores);
    }
  }
}
