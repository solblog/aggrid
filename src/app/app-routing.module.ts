import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstExerciseComponent } from './first-exercise/first-exercise.component';
import { SecondExerciseComponent } from './second-exercise/second-exercise.component';


const routes: Routes = [
  { path: 'first-exercise', component: FirstExerciseComponent },
  { path: 'second-exercise', component: SecondExerciseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
