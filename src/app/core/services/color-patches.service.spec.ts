/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ColorPatchesService } from './color-patches.service';

describe('ColorPatchesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColorPatchesService]
    });
  });

  it('should ...', inject([ColorPatchesService], (service: ColorPatchesService) => {
    expect(service).toBeTruthy();
  }));
});
