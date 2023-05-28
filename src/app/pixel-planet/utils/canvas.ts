import { Pixel, PixelData } from './pixel';
import { map_from_flat_score } from './mapping';
import { ConfigService } from '../services/config.service';

interface CanvasData {
  matrix: PixelData[][];
  row_num: number;
  col_num: number;
  pixel_size: number;
  bg_img?: string;
}

export class Canvas implements CanvasData {
  public matrix: PixelData[][] = [];
  row_num: number;
  col_num: number;
  bg_img: string;
  pixel_size: number;
  constructor(protected config: ConfigService) {}
  protected init_pixel_items() {
    for (let i = 0; i < this.row_num; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < this.col_num; j++) {
        this.matrix[i][j] = new Pixel();
      }
    }
  }
  public set_bg_img(bg_img: string) {
    this.bg_img = bg_img;
    return this;
  }

  clear() {
    this.init_pixel_items();
  }
}

interface HalfPlanetCanvasData extends CanvasData {
  side: 'left' | 'right';
}

export class HalfPlanetCanvas extends Canvas implements HalfPlanetCanvasData {
  override row_num: number = this.config.HALF_PLANET_IN_CANVAS['row_num'];
  override col_num: number = this.config.HALF_PLANET_IN_CANVAS['col_num'];
  public side: 'left' | 'right';
  constructor(
    pixelSize: number,
    side: 'left' | 'right',
    config: ConfigService
  ) {
    super(config);
    this.pixel_size = pixelSize;
    this.init_pixel_items();
    this.side = side;
  }
  public flat_from_score_to_planet(scores: number[]) {
    let counter = 0;
    for (let i = 0; i < scores.length; i++) {
      const score = scores[i];
      for (let j = 0; j < this.config.DAILY_BONUS_GRANT; j++) {
        if (j >= score) {
          const [row, col] = map_from_flat_score(this.side, 'half', counter);
          this.matrix[row][col] = (this.matrix[row][col] as Pixel).set_mask();
        }
        counter++;
      }
    }
    return this;
  }

  public flat_from_score_to_bonus(scores: number[]): PixelData[][] {
    for (let i = 0; i < scores.length; i++) {
      const score = scores[i];
      if (score >= this.config.DAILY_BONUS_GRANT) {
        const [row, col] = map_from_flat_score(this.side, 'bonus', i);
        this.matrix[row][col] = (this.matrix[row][col] as Pixel).set_bonus();
        if (score >= this.config.DAILY_SUPER_GRANT) {
          this.matrix[row][col] = (this.matrix[row][col] as Pixel).set_super();
        }
      }
    }
    return this.matrix;
  }
}

interface WholePlanetCanvasData extends CanvasData {}

export class WholePlanetCanvas extends Canvas implements WholePlanetCanvasData {
  override row_num: number = this.config.WHOLE_PLANET_IN_CANVAS['row_num'];
  override col_num: number = this.config.WHOLE_PLANET_IN_CANVAS['col_num'];
  constructor(pixelSize: number, config: ConfigService) {
    super(config);
    this.pixel_size = pixelSize;
    this.init_pixel_items();
  }
  public flat_from_score_to_planet(side: 'left' | 'right', scores: number[]) {
    let counter = 0;
    for (let i = 0; i < scores.length; i++) {
      const score = scores[i];
      for (let j = 0; j < this.config.DAILY_BONUS_GRANT; j++) {
        if (j >= score) {
          const [row, col] = map_from_flat_score(side, 'whole', counter);
          this.matrix[row][col] = (this.matrix[row][col] as Pixel).set_mask();
        }
        counter++;
      }
    }
    return this;
  }
}
