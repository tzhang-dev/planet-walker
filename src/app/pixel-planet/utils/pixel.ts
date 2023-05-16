export interface PixelData {
  color: string;
}

export class Pixel implements PixelData {
  public color: string;
  constructor() {
    this.set_transparent();
  }
  set_transparent() {
    this.color = 'transparent';
    return this;
  }
  set_mask() {
    this.color = '#13243F';
    return this;
  }
  set_bonus() {
    this.color = '#82B1C5';
    return this;
  }
  set_bonus_plus() {
    this.color = '#E3FBFF';
    return this;
  }
}
