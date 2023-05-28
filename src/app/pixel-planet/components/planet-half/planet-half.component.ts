import { Component, Input, OnInit } from '@angular/core';
import { CanvasComponent } from '../canvas/canvas.component';
import { HalfPlanetCanvas } from '../../utils/canvas';
import { NgIf } from '@angular/common';
import { PlanetNames, planets } from '../../utils/planets';
import { Point } from '../../utils/point';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-planet-half[planetName][side][points]',
  templateUrl: './planet-half.component.html',
  styleUrls: ['./planet-half.component.scss'],
  standalone: true,
  imports: [CanvasComponent, NgIf],
})
export class PlanetHalfComponent implements OnInit {
  @Input() public planetName: PlanetNames;
  @Input() public side: 'left' | 'right' = 'left';
  private _points: number[] = [];
  public half_canvas?: HalfPlanetCanvas;
  @Input() set points(points: Point[]) {
    this._points = points.map((point) => point.value);
    this.half_canvas?.clear();
    this.flat_points();
    this.flat_bonus();
  }
  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.half_canvas = new HalfPlanetCanvas(0, this.side, this.config);
    this.onResize();
    this.half_canvas.set_bg_img(planets[this.planetName][this.side]);
    this.flat_points();
    this.flat_bonus();
  }
  private flat_bonus() {
    this.half_canvas?.flat_from_score_to_bonus(this._points);
  }
  private flat_points() {
    this.half_canvas?.flat_from_score_to_planet(this._points);
  }

  set pixelSize(value: number) {
    this.half_canvas!.pixel_size = value;
  }

  onResize() {
    this.pixelSize = this.pixelSize = window.innerHeight >= 750 ? 20 : 15;
  }
}
