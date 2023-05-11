import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedetailCardsComponent } from './homedetail-cards.component';

describe('HomedetailCardsComponent', () => {
  let component: HomedetailCardsComponent;
  let fixture: ComponentFixture<HomedetailCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomedetailCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomedetailCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
