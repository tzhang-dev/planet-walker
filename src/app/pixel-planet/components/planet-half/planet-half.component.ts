import { Component, Input, OnInit } from '@angular/core';
import { CanvasComponent } from '../canvas/canvas.component';
import { HalfPlanetCanvas } from '../../utils/canvas';
import { NgIf } from '@angular/common';
import { planets } from '../../utils/planets';
import { Point } from '../../utils/point';
import shared from '../../utils/shared';

@Component({
  selector: 'app-planet-half',
  templateUrl: './planet-half.component.html',
  styleUrls: ['./planet-half.component.scss'],
  standalone: true,
  imports: [CanvasComponent, NgIf],
})
export class PlanetHalfComponent implements OnInit {
  public player = shared.player!;
  private _points: number[] = [];
  public half_canvas?: HalfPlanetCanvas;
  @Input() set points(points: Point[]) {
    this._points = points.map((point) => point.value);
    this.half_canvas?.flat_from_score_to_planet(this._points);
    this.flat_points();
    this.flat_bonus();
  }
  constructor() {}

  ngOnInit() {
    this.half_canvas = new HalfPlanetCanvas(this.player.side!);
    this.half_canvas.set_bg_img(
      planets[this.player.planet_name!][this.player.side!]
    );
    this.flat_points();
    this.flat_bonus();
  }
  private flat_bonus() {
    this.half_canvas?.flat_from_score_to_bonus(this._points);
  }
  private flat_points() {
    this.half_canvas?.flat_from_score_to_planet(this._points);
  }
}
