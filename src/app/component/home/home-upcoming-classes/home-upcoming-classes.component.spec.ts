import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUpcomingClassesComponent } from './home-upcoming-classes.component';

describe('HomeUpcomingClassesComponent', () => {
  let component: HomeUpcomingClassesComponent;
  let fixture: ComponentFixture<HomeUpcomingClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUpcomingClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeUpcomingClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
