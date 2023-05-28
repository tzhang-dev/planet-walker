import { Component, Input, OnInit } from '@angular/core';
import { PlanetNames, planets } from '../../utils/planets';
import { WholePlanetCanvas } from '../../utils/canvas';
import { Point } from '../../utils/point';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-planet-whole[planet_name][left][right]',
  templateUrl: './planet-whole.component.html',
  styleUrls: ['./planet-whole.component.scss'],
})
export class PlanetWholeComponent implements OnInit {
  set pixelSize(value: number) {
    this.canvas.pixel_size = value;
  }
  canvas: WholePlanetCanvas;
  @Input() set planet_name(planet_name: PlanetNames) {
    this.canvas.set_bg_img(planets[planet_name].whole);
  }
  @Input() left: Point[];
  @Input() right: Point[];

  ngOnChanges() {
    this.canvas.clear();
    const left = this.left.map((point) => point.value);
    this.canvas.flat_from_score_to_planet('left', left);
    const right = this.right.map((point) => point.value);
    this.canvas.flat_from_score_to_planet('right', right);
  }
  constructor(private config: ConfigService) {
    this.canvas = new WholePlanetCanvas(0, this.config);
    this.onResize();
  }

  ngOnInit() {}

  onResize() {
    this.pixelSize = window.innerHeight >= 750 ? 5 : 4;
  }
}
