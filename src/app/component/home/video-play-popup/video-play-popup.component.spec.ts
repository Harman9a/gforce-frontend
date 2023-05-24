import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlayPopupComponent } from './video-play-popup.component';

describe('VideoPlayPopupComponent', () => {
  let component: VideoPlayPopupComponent;
  let fixture: ComponentFixture<VideoPlayPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoPlayPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoPlayPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
