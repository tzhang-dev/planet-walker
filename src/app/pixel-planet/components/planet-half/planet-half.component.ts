import { Component, Input, OnInit } from '@angular/core';
import { CanvasComponent } from '../canvas/canvas.component';
import { HalfPlanetCanvas } from '../../utils/canvas';
import { NgIf } from '@angular/common';
import { planets } from '../../utils/planets';
import { Point } from '../../utils/point';

@Component({
  selector: 'app-planet-half',
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
  private _points: number[] = [];
  public half_canvas?: HalfPlanetCanvas;
  @Input() set points(points: Point[]) {
    this._points = points.map((point) => point.value);
    this.half_canvas?.flat_from_score_to_planet(this._points);
    this.flat_bonus();
  }
  constructor() {}

  ngOnInit() {
    this.half_canvas = new HalfPlanetCanvas(this.side);
    this.half_canvas.set_bg_img(planets[this.planet_name][this.side]);
    this.half_canvas.flat_from_score_to_planet(this._points);
    this.flat_bonus();
  }
  private flat_bonus() {
    if (this.show_bonus) {
      this.half_canvas?.flat_from_score_to_bonus(this._points);
    }
  }
}
