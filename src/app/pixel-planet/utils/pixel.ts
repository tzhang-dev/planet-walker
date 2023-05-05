export interface PixelData {
  color: string;
}

export class Pixel implements PixelData {
  public color: string;
  constructor(color?: string) {
    this.color = color || 'transparent';
  }
  set_transparent() {
    this.color = 'transparent';
    return this;
  }
  set_mask() {
    this.color = '#9D9D9D';
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
