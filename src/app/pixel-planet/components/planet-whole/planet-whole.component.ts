import { Component, Input, OnInit } from '@angular/core';
import { planets } from '../../utils/planets';
import { WholePlanetCanvas } from '../../utils/canvas';

@Component({
  selector: 'app-planet-whole',
  templateUrl: './planet-whole.component.html',
  styleUrls: ['./planet-whole.component.scss'],
})
export class PlanetWholeComponent implements OnInit {
  @Input() planet_name: keyof typeof planets = 'default';
  planet = planets[this.planet_name];
  scores_left = [
    0, 13, 10, 3, 15, 0, 6, 13, 0, 10, 1, 13, 3, 15, 4, 9, 6, 13, 4, 6,
  ];
  scores_right = [
    0, 13, 10, 3, 15, 0, 6, 13, 0, 10, 1, 13, 3, 15, 4, 9, 6, 13, 4, 6,
  ];
  canvas?: WholePlanetCanvas;
  constructor() {}

  ngOnInit() {
    this.canvas = new WholePlanetCanvas();
    this.canvas.set_bg_img(planets[this.planet_name].whole);
    this.canvas.flat_from_score_to_planet('right', this.scores_right);
    this.canvas.flat_from_score_to_planet('left', this.scores_left);
  }
}
