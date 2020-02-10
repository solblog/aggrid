import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-exercise',
  templateUrl: './first-exercise.component.html',
  styleUrls: ['./first-exercise.component.scss']
})
export class FirstExerciseComponent implements OnInit {
 
  columnDefs = [
      {headerName: 'Make', field: 'make' },
      {headerName: 'Model', field: 'model' },
      {headerName: 'Price', field: 'price'}
  ];

  rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
