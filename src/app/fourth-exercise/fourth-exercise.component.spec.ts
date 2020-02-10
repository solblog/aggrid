import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthExerciseComponent } from './fourth-exercise.component';

describe('FourthExerciseComponent', () => {
  let component: FourthExerciseComponent;
  let fixture: ComponentFixture<FourthExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
