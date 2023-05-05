import { Pixel, PixelData } from './pixel';
import { DAILY_MAX_SCORE_GAIN, HALF_PLANET } from './defines';
import { get_half_planet_position } from './mapping';

export interface CanvasData {
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
  pixel_size: number = 20;
  constructor() {
    this.row_num = HALF_PLANET['row_num'];
    this.col_num = HALF_PLANET['col_num'];
    this.init_pixel_items();
  }
  private init_pixel_items() {
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
  public set_pixel_size(pixel_size: number) {
    this.pixel_size = pixel_size;
    return this;
  }
}

export interface HalfPlanetCanvasData extends CanvasData {
  side: 'left' | 'right';
}

export class HalfPlanetCanvas extends Canvas implements HalfPlanetCanvasData {
  public side: 'left' | 'right';
  constructor(side: 'left' | 'right') {
    super();
    this.side = side;
  }
  public flat_from_score_to_planet(scores: number[]) {
    let counter = 0;
    for (let i = 0; i < scores.length; i++) {
      const score = scores[i];
      for (let j = 0; j < DAILY_MAX_SCORE_GAIN; j++) {
        if (j >= score) {
          const [row, col] = get_half_planet_position(
            this.side,
            'planet',
            counter
          );
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
      if (score >= DAILY_MAX_SCORE_GAIN) {
        const [row, col] = get_half_planet_position(this.side, 'bonus_star', i);
        this.matrix[row][col] = (this.matrix[row][col] as Pixel).set_bonus();
      }
    }
    return this.matrix;
  }
}
