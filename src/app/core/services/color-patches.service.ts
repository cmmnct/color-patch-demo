import { Injectable } from '@angular/core';
import { ColorPatch } from '../models/color-patch';

@Injectable()
export class ColorPatchesService {
patches: ColorPatch[] = [];
  constructor() { }

  lsKey = 'color-patches';

  getColorPatches(): ColorPatch[] {
    const result = window.localStorage.getItem(this.lsKey);
    if (result) {
      const newPatches = JSON.parse(result);
   newPatches.forEach(element => {
     const newPatch = new ColorPatch(element.R, element.G, element.B, element.A, element.name);
     this.patches.push(newPatch);
   });
    } else {
      return Array<ColorPatch>();
    }

  }

  saveColorPatches(patches: ColorPatch[]) {
    window.localStorage.setItem(this.lsKey, JSON.stringify(patches));
  }

  clearColorPatches() {
    window.localStorage.setItem(this.lsKey, null);
  }
}
