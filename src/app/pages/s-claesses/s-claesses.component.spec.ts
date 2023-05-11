import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SClaessesComponent } from './s-claesses.component';

describe('SClaessesComponent', () => {
  let component: SClaessesComponent;
  let fixture: ComponentFixture<SClaessesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SClaessesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SClaessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
