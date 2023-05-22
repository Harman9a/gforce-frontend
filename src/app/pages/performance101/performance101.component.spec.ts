import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Performance101Component } from './performance101.component';

describe('Performance101Component', () => {
  let component: Performance101Component;
  let fixture: ComponentFixture<Performance101Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Performance101Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Performance101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
