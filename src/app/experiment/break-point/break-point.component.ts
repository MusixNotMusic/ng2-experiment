import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-break-point',
  templateUrl: './break-point.component.html',
  styleUrls: ['./break-point.component.less']
})
export class BreakPointComponent implements OnInit {

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      // Breakpoints.HandsetLandscape,
      // Breakpoints.HandsetPortrait,
      Breakpoints.XLarge,
      Breakpoints.Large,
      Breakpoints.Medium,
      Breakpoints.Small,
      Breakpoints.XSmall
      // Breakpoints.Tablet
    ]).subscribe(result => {
      if (result.matches) {
        // this.activateHandsetLayout();
        console.log('breakpoint matches', Breakpoints, result);
      }
    });
  }

  ngOnInit(): void {
  }

}
