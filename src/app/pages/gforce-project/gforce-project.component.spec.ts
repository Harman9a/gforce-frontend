import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GforceProjectComponent } from './gforce-project.component';

describe('GforceProjectComponent', () => {
  let component: GforceProjectComponent;
  let fixture: ComponentFixture<GforceProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GforceProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GforceProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
