import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRunnerInnerComponent } from './show-runner-inner.component';

describe('ShowRunnerInnerComponent', () => {
  let component: ShowRunnerInnerComponent;
  let fixture: ComponentFixture<ShowRunnerInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRunnerInnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowRunnerInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
