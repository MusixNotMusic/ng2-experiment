import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay-panel',
  template: `
    <p class="wu-overlay-pane">Overlay展示</p>
  `,
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
  `]
})
export class OverlayPanelBaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
