import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CdkOverlayModule } from './experiment/cdkOverlay/cdk_overlay.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { LiveAnnouncerComponent } from './experiment/live-announcer/live-announcer.component';
import { DropListComponent } from './experiment/drop-list/drop-list.component';
import { DragBlockComponent } from './experiment/drag-block/drag-block.component';
import { BreakPointComponent } from './experiment/break-point/break-point.component';

@NgModule({
  declarations: [
    AppComponent,
    LiveAnnouncerComponent,
    DropListComponent,
    DragBlockComponent,
    BreakPointComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CdkOverlayModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
