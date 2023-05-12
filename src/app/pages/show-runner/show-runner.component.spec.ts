import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRunnerComponent } from './show-runner.component';

describe('ShowRunnerComponent', () => {
  let component: ShowRunnerComponent;
  let fixture: ComponentFixture<ShowRunnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRunnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowRunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
