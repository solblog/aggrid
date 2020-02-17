import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthExerciseComponent } from './fifth-exercise.component';

describe('FifthExerciseComponent', () => {
  let component: FifthExerciseComponent;
  let fixture: ComponentFixture<FifthExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifthExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
