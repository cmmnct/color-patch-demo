import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ColorPatchesService } from './core/services/color-patches.service';
import { ColorPatchComponent } from './core/components/color-patch/color-patch.component';
import { PatchViewerComponent } from './patch-viewer/patch-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorPatchComponent,
    PatchViewerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ColorPatchesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
