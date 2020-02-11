import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';

import { FirstExerciseComponent } from './first-exercise/first-exercise.component';
import { SecondExerciseComponent } from './second-exercise/second-exercise.component';
import { ThirdExerciseComponent } from './third-exercise/third-exercise.component';
import { FourthExerciseComponent } from './fourth-exercise/fourth-exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstExerciseComponent,
    SecondExerciseComponent,
    ThirdExerciseComponent,
    FourthExerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
