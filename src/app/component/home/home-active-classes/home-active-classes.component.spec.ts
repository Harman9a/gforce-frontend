import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeActiveClassesComponent } from './home-active-classes.component';

describe('HomeActiveClassesComponent', () => {
  let component: HomeActiveClassesComponent;
  let fixture: ComponentFixture<HomeActiveClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeActiveClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeActiveClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
