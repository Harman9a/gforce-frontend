import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolInnerComponent } from './school-inner.component';

describe('SchoolInnerComponent', () => {
  let component: SchoolInnerComponent;
  let fixture: ComponentFixture<SchoolInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolInnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
