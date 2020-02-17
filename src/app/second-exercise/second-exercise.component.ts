import { Component, OnInit } from '@angular/core';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';

@Component({
  selector: 'app-second-exercise',
  templateUrl: './second-exercise.component.html',
  styleUrls: ['./second-exercise.component.scss']
})
export class SecondExerciseComponent implements OnInit {
  
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private headerHeight;
  private frameworkComponents;
  private defaultColDef;

  rowData = [
    { make: 'Toyota', model: 'Male', price: 35000 },
    { make: 'Ford', model: 'Female', price: 32000 },
    { make: 'Porsche', model: 'Male', price: 72000 }
  ];

  constructor() {

    this.columnDefs = [
        { headerName: 'Make',
          field: 'make',
          sortable: true,
          filter: true
        }
        ,
        {
          headerName: 'Model',
          field: 'model',
        },
        { HeaderName: 'Price',
          field: 'price',
          sortable: true,
          filter: true
        }
      ];


  }

  ngOnInit() {
  }




}
