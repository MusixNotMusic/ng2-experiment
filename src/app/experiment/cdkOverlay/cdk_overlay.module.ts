import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule, OverlayContainer, FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { OverlayPanelBaseComponent } from './overlay_panel_base.component';
import { CdkOverlayCenterComponent } from './overlay_panel_center.compoent';
import { CdkOverlayGlobalComponent } from './overlay_panel_global.component';
import { CdkOverlayTemplateComponent } from './overlay_panel_template.component';
import { CdkOverlayOriginComponent } from './overlay_panel_origin.component';
import { CdkOverlayDirectiveComponent } from './overlay_panel_directive.component';

@NgModule({
    imports: [
        OverlayModule
        , PortalModule
        // , OverlayContainer
        // , FullscreenOverlayContainer
    ],
    declarations: [
        OverlayPanelBaseComponent
        , CdkOverlayCenterComponent
        , CdkOverlayGlobalComponent
        , CdkOverlayTemplateComponent
        , CdkOverlayOriginComponent
        , CdkOverlayDirectiveComponent
    ],
    entryComponents: [
        OverlayPanelBaseComponent
    ],
    exports: [
        OverlayPanelBaseComponent
        , CdkOverlayCenterComponent
        , CdkOverlayGlobalComponent
        , CdkOverlayTemplateComponent
        , CdkOverlayOriginComponent
        , CdkOverlayDirectiveComponent
    ]
})

export class CdkOverlayModule {
}
