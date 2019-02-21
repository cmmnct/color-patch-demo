import { Component, OnInit } from '@angular/core';
import { ColorPatch } from '../core/models/color-patch';
import { ColorPatchesService } from '../core/services/color-patches.service';

@Component({
  selector: 'app-patch-viewer',
  templateUrl: './patch-viewer.component.html',
  styleUrls: ['./patch-viewer.component.css']
})
export class PatchViewerComponent implements OnInit {
  patches: ColorPatch[] = [];

  constructor(private colorPatchService: ColorPatchesService) { }

  ngOnInit() {
    this.patches = this.colorPatchService.patches;
  }

}
