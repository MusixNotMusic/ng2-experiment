import { Component, Inject, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { OverlayPanelBaseComponent } from './overlay_panel_base.component';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-cdk-global-overlay',
    template: `
        <!-- 全局显示 页面中显示位置自己控制 -->
        <button (click)="showOverlayGlobalPanelPosition()">页面中显示，自己控制位置</button>
    `,
    encapsulation: ViewEncapsulation.None,
    preserveWhitespaces: false
})
export class CdkOverlayGlobalComponent {

    globalOverlayPosition = 0;

    constructor(public overlay: Overlay, public viewContainerRef: ViewContainerRef, @Inject(DOCUMENT) public _document: any) {
    }

    /**
     * overlay 在整个屏幕位置，自己控制位置
     */
    showOverlayGlobalPanelPosition(): void {
        const config = new OverlayConfig();
        config.positionStrategy = this.overlay.position()
            .global()
            .left(`${this.globalOverlayPosition}px`) // 自己控制位置
            .top(`${this.globalOverlayPosition}px`);
        this.globalOverlayPosition += 30;
        config.hasBackdrop = true;
        const overlayRef = this.overlay.create(config);
        overlayRef.backdropClick().subscribe(() => {
            overlayRef.dispose(); // 点击背景关掉弹窗
        });
        overlayRef.attach(new ComponentPortal(OverlayPanelBaseComponent, this.viewContainerRef));
    }
}
