import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentGComponent } from './payment-g.component';

describe('PaymentGComponent', () => {
  let component: PaymentGComponent;
  let fixture: ComponentFixture<PaymentGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
