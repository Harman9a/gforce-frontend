import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceDoneComponent } from './attendance-done.component';

describe('AttendanceDoneComponent', () => {
  let component: AttendanceDoneComponent;
  let fixture: ComponentFixture<AttendanceDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceDoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
