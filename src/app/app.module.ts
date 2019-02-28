import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CdkOverlayModule } from './experiment/cdkOverlay/cdk_overlay.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CdkOverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
