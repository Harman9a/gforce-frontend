import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineSchoolComponent } from './online-school.component';

describe('OnlineSchoolComponent', () => {
  let component: OnlineSchoolComponent;
  let fixture: ComponentFixture<OnlineSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineSchoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
