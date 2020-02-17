import { Component, OnInit } from '@angular/core';
import { TickCellRenderer } from './tick-cell-renderer.component';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';


@Component({
  selector: 'app-fifth-exercise',
  templateUrl: './fifth-exercise.component.html',
  styleUrls: ['./fifth-exercise.component.scss']
})
export class FifthExerciseComponent implements OnInit {

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
          cellEditor: 'agSelectCellEditor',
          cellEditorParams: {
            values: ['Toyota', 'Ford', 'Porsche']
          }
        }
        ,
        {
          headerName: 'Model',
          field: 'model',
          cellRenderer: 'tickCellRenderer',
          cellEditor: 'agSelectCellEditor',
          cellEditorParams: {
            values: ['Male', 'Female'],
            cellRenderer: 'tickCellRenderer'
          }
        },
        { HeaderName: 'Price',
          field: 'price',
          sortable: true,
          filter: true
        }
      ];

    this.frameworkComponents = { tickCellRenderer: TickCellRenderer };

    this.defaultColDef = {
      editable: true,
      resizable: true
    };


    this.headerHeight = 0;

  }

  ngOnInit() {
  }

  onCellValueChanged(params) {

    var colId = params.column.getId();
    alert(colId);

  }

  onGridReady(params) {

    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();

    alert('Hola');

  }





}
