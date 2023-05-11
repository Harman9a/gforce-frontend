import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheForceComponent } from './the-force.component';

describe('TheForceComponent', () => {
  let component: TheForceComponent;
  let fixture: ComponentFixture<TheForceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheForceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheForceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
