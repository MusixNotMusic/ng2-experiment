import { Component, ElementRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { OverlayPanelBaseComponent } from './overlay_panel_base.component';

@Component({
    selector: 'app-cdk-origin-overlay',
    template: `
        <!-- 依附某个组件或者template显示,鼠标移入的时候显示，移出来的时候不显示 -->
        <button style="margin-left: 10px" #connectComponentOrigin
                (mouseenter)="showOverlayPanelConnectComponent()"
                (mouseleave)="dismissOverlayPanelConnectComponent()">
            overlay connect 组件显示
        </button>
    `,
    encapsulation: ViewEncapsulation.None,
    preserveWhitespaces: false
})
export class CdkOverlayOriginComponent {

    private _overlayConnectRef: OverlayRef;

    @ViewChild('connectComponentOrigin') _overlayConnectComponentOrigin: ElementRef;

    constructor(public overlay: Overlay, public viewContainerRef: ViewContainerRef) {
    }

    /**
     * overlay connect origin 显示，依附某个组件显示
     */
    showOverlayPanelConnectComponent(): void {
        const strategy = this.overlay.position()
            .flexibleConnectedTo(this._overlayConnectComponentOrigin.nativeElement)
            .withPositions([{
                originX: 'center',
                originY: 'bottom',
                overlayX: 'center',
                overlayY: 'top',
                offsetX: 0,
                offsetY: 0
            }]); // 这么理解 origin 组件(依附空组件) 的那个点(originX, originY) 和 overlay组件的点(overlayX, overlayY)
        // 重合，从而确定overlay组件显示的位置
        strategy.withLockedPosition(true);
        const config = new OverlayConfig({positionStrategy: strategy});
        config.scrollStrategy = this.overlay.scrollStrategies.reposition(); // 更随滑动的策略
        this._overlayConnectRef = this.overlay.create(config);
        this._overlayConnectRef.attach(new ComponentPortal(OverlayPanelBaseComponent, this.viewContainerRef));
    }

    dismissOverlayPanelConnectComponent(): void {
        if (this._overlayConnectRef && this._overlayConnectRef.hasAttached()) {
            this._overlayConnectRef.dispose();
        }
    }
}
