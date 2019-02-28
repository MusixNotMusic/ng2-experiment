import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { OverlayPanelBaseComponent } from './overlay_panel_base.component';

@Component({
    selector: 'app-cdk-directive-overlay',
    template: `
        <button cdk-overlay-origin #trigger="cdkOverlayOrigin" (click)="isMenuOpen = !isMenuOpen">
            指令实现
        </button>

        <ng-template cdk-connected-overlay
                     [cdkConnectedOverlayOrigin]="trigger"
                     [cdkConnectedOverlayWidth]="500"
                     cdkConnectedOverlayHasBackdrop
                     [cdkConnectedOverlayOpen]="isMenuOpen"
                     (backdropClick)="isMenuOpen=false">
            <p class="wu-overlay-pane">Overlay展示</p>
        </ng-template>
    `,
    // styleUrls: [],
    styles: [`
    .wu-overlay-pane {
      margin: 2px;
      padding: 5px;
      border: 1px solid orange;
      background-color: skyblue;
      width: fit-content;
      font-size: 12px;
      border-radius: 5px;
    }
  `],
    encapsulation: ViewEncapsulation.None,
    preserveWhitespaces: false
})
export class CdkOverlayDirectiveComponent {
    @ViewChild('overlayGlobalTemplate') baseComponent: OverlayPanelBaseComponent;
    // private _overlayTemplateRef: OverlayRef;
    /**
     * overlay是否显示
     */
    isMenuOpen = false;

    constructor(public overlay: Overlay) {
        // this._overlayTemplateRef.attach(this.baseComponent);
    }

}
