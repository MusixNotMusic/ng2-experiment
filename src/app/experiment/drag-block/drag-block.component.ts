import {
  Component,
  OnInit,
  TemplateRef,
  AfterViewInit,
  ViewContainerRef,
  OnDestroy,
  ViewChild
 } from '@angular/core';

import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { CdkDrag } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-drag-block',
  templateUrl: './drag-block.component.html',
  styleUrls: ['./drag-block.component.less']
})
export class DragBlockComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(TemplateRef) _dialogTemplate: TemplateRef<any>;
  private _overlayRef: OverlayRef;
  private _portal: TemplatePortal;
  constructor(private _overlay: Overlay, private _viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this._portal = new TemplatePortal(this._dialogTemplate, this._viewContainerRef);
    this._overlayRef = this._overlay.create({
      positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop: true
    });
    this._overlayRef.backdropClick().subscribe(() => this._overlayRef.detach());
  }

  ngOnDestroy(): void {
    this._overlayRef.dispose();
  }

  openDialog(): void {
    this._overlayRef.attach(this._portal);
  }

  dragStart(event: CdkDrag): void {
    console.log('cdkDragStart event ==>', event);
  }

  dragMove(): void {
    console.log('cdkDragMove event ==>', event);
  }
}
