import { Component, Input, OnInit } from '@angular/core';
import { planets } from '../../utils/planets';

@Component({
  selector: 'app-planet-whole',
  templateUrl: './planet-whole.component.html',
  styleUrls: ['./planet-whole.component.scss'],
})
export class PlanetWholeComponent implements OnInit {
  @Input() planet_name: keyof typeof planets = 'default';
  planet = planets[this.planet_name];
  pixel_size = 5;
  scores_left = [
    0, 13, 10, 3, 15, 0, 6, 13, 0, 10, 1, 13, 3, 15, 4, 9, 6, 13, 4, 6,
  ];
  scores_right = [
    0, 13, 10, 3, 15, 0, 6, 13, 0, 10, 1, 13, 3, 15, 4, 9, 6, 13, 4, 6,
  ];
  constructor() {}

  ngOnInit() {}
}
