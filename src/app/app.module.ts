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

import { TickCellRenderer } from './fifth-exercise/tick-cell-renderer.component';
import { FifthExerciseComponent } from './fifth-exercise/fifth-exercise.component';

import {HttpRemoteService} from './services/http-remote.service';


@NgModule({
  declarations: [
    AppComponent,
    FirstExerciseComponent,
    SecondExerciseComponent,
    ThirdExerciseComponent,
    FourthExerciseComponent,
    TickCellRenderer,
    FifthExerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([TickCellRenderer])
  ],
  providers: [HttpRemoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
