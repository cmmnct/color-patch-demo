import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ColorPatch } from '../../models/color-patch';

@Component({
  selector: 'color-patch',
  templateUrl: './color-patch.component.html',
  styleUrls: ['./color-patch.component.css']
})
export class ColorPatchComponent implements OnInit {
  @Input() patch: ColorPatch;
  @Output() delete = new EventEmitter();
  @Output() updateMainPatch = new EventEmitter();

  ngOnInit() {
    console.log(this.patch);
  }

  onClickPatch() {
    this.updateMainPatch.emit(this.patch);
  }

  onDeletePatch() {
    this.delete.emit(this.patch);
  }

}
