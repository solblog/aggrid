import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondExerciseComponent } from './second-exercise.component';

describe('SecondExerciseComponent', () => {
  let component: SecondExerciseComponent;
  let fixture: ComponentFixture<SecondExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
