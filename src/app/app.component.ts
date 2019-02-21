import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { ColorPatch } from './core/models/color-patch';
import { ColorPatchesService } from './core/services/color-patches.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  currentPatch: ColorPatch = new ColorPatch(0, 0, 0, 100, 'black');

  boxHeight = 100;
  nrOfRandos = 0;
  patches: ColorPatch[] = [] ;
  colorR: any;
  colorG: any;
  colorB: any;
  colorA: any;
  patchName: any;
  constructor(private colorPatchesService: ColorPatchesService) {

  }

  ngOnInit() {
   this.colorPatchesService.getColorPatches();
   this.patches = this.colorPatchesService.patches;
  }

  onChangeSliders() {
this.currentPatch.generateRgbaColor();
console.log(this.currentPatch);
  }

  addNrOfRandomPatches() {
    for (let i = 0; i < this.nrOfRandos; i++) {
      setTimeout(() => {
        this.randomizePatch();
        this.onClickAddPatch();
      }, (i + 1) * 100);
    }
  }

  onClickAddPatch() {
    const newPatch: ColorPatch = new ColorPatch(this.colorR, this.colorG, this.colorB, this.colorA, this.patchName);
    this.patches.push(newPatch);
  }

  randomizePatch() {
    this.colorR = Math.round(Math.random() * 255);
    this.colorG = Math.round(Math.random() * 255);
    this.colorB = Math.round(Math.random() * 255);
    this.colorA = Math.round(Math.random() * 100);
    this.onChangeSliders();
  }

  savePatches() {
    this.colorPatchesService.saveColorPatches(this.patches);
  }

  clearPatches() {
    this.patches = Array<ColorPatch>();
    this.savePatches();
  }

  onPatchDelete(event) {
    console.log(event);
    const inx = this.patches.indexOf(event);
    this.patches.splice(inx, 1);
  }

  onMainPatchUpdate(clickedPatch) {
    this.currentPatch = clickedPatch;
  }
}
