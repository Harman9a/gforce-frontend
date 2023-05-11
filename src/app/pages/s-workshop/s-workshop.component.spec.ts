import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SWorkshopComponent } from './s-workshop.component';

describe('SWorkshopComponent', () => {
  let component: SWorkshopComponent;
  let fixture: ComponentFixture<SWorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SWorkshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
