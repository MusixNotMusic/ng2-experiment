import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveAnnouncerComponent } from './live-announcer.component';

describe('LiveAnnouncerComponent', () => {
  let component: LiveAnnouncerComponent;
  let fixture: ComponentFixture<LiveAnnouncerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveAnnouncerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveAnnouncerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
