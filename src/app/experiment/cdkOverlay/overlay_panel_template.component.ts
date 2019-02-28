import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortalDirective } from '@angular/cdk/portal';

@Component({
    selector: 'app-cdk-template-overlay',
    template: `
        <!-- 鼠标移入的时候显示 ng-template对应的内容，移出的时候不显示 -->
        <button style="margin-left: 10px" (mouseenter)="showOverlayPanelTemplate()"
                (mouseleave)="dismissOverlayPanelTemplate()">
            显示 ng-template 内容
        </button>
        <!-- ng-template overlay 将要显示的内容 -->
        <ng-template cdk-portal #overlayGlobalTemplate="cdkPortal">
            <p class="template-overlay-pane"> ng-temtortelliniTemplateplate显示 </p>
        </ng-template>
    `,
    styles: [`
        .template-overlay-pane {
            margin: 2px;
            padding: 5px;
            border: 1px solid orange;
            background-color: skyblue;
            width: fit-content;
            font-size: 12px;
            border-radius: 5px;
        }`],
    encapsulation: ViewEncapsulation.None,
    preserveWhitespaces: false
})
export class CdkOverlayTemplateComponent {
    globalOverlayPosition = 0;
    private _overlayTemplateRef: OverlayRef;

    @ViewChild('overlayGlobalTemplate') templateGlobalPortals: TemplatePortalDirective;
    constructor(public overlay: Overlay) {}

    showOverlayPanelTemplate(): void {
        const config = new OverlayConfig();
        config.positionStrategy = this.overlay.position()
            .global()
            .centerHorizontally()
            .top(`${this.globalOverlayPosition}px`);
        this.globalOverlayPosition += 30;
        this._overlayTemplateRef = this.overlay.create(config);
        this._overlayTemplateRef.attach(this.templateGlobalPortals);
    }

    dismissOverlayPanelTemplate (): void {
        if (this._overlayTemplateRef && this._overlayTemplateRef.hasAttached()) {
            this._overlayTemplateRef.dispose();
        }
    }

}
