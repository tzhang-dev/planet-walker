import { Component, Input, OnInit } from '@angular/core';
import { PlanetNames, planets } from '../../utils/planets';
import { WholePlanetCanvas } from '../../utils/canvas';
import { Point } from '../../utils/point';

@Component({
  selector: 'app-planet-whole[planet_name][left][right]',
  templateUrl: './planet-whole.component.html',
  styleUrls: ['./planet-whole.component.scss'],
})
export class PlanetWholeComponent implements OnInit {
  canvas: WholePlanetCanvas = new WholePlanetCanvas();
  @Input() set planet_name(planet_name: PlanetNames) {
    this.canvas.set_bg_img(planets[planet_name].whole);
  }
  @Input() set left(points: Point[]) {
    const scores = points.map((point) => point.value);
    this.canvas.flat_from_score_to_planet('left', scores);
  }
  @Input() set right(points: Point[]) {
    const scores = points.map((point) => point.value);
    this.canvas.flat_from_score_to_planet('right', scores);
  }
  constructor() {}

  ngOnInit() {}
}
