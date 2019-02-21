export class ColorPatch {
  name: string;
  rgbaColor: string;
  R: number;
  G: number;
  B: number;
  A: number;
  constructor(cR: number, cG: number, cB: number, cA: number, na: string) {
    if (!!na) {
      this.name = na;
    } else {
      this.name = this.generateRandomName();
    }

    this.R = cR;
    this.G = cG;
    this.B = cB;
    this.A = cA;
    this.generateRgbaColor();
  }

  generateRandomName() {
   return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  generateRgbaColor() {
    this.rgbaColor = `rgba(${this.R},${this.G},${this.B},${this.A / 100})`;
  }
}
