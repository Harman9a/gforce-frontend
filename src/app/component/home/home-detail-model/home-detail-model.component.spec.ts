import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDetailModelComponent } from './home-detail-model.component';

describe('HomeDetailModelComponent', () => {
  let component: HomeDetailModelComponent;
  let fixture: ComponentFixture<HomeDetailModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDetailModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDetailModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
