import { Component, OnInit } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
@Component({
  selector: 'app-live-announcer',
  templateUrl: './live-announcer.component.html',
  styleUrls: ['./live-announcer.component.less']
})
export class LiveAnnouncerComponent implements OnInit {

  constructor(liveAnnouncer: LiveAnnouncer) {
    liveAnnouncer.announce('Hey Google');
  }

  ngOnInit(): void {
  }
}
