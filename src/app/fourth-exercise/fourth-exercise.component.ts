import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AllCommunityModules, Module  } from "@ag-grid-community/all-modules";
import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css";


@Component({
  selector: 'app-fourth-exercise',
  templateUrl: './fourth-exercise.component.html',
  styleUrls: ['./fourth-exercise.component.scss']
   /*
   template: `
   <ag-grid-angular
   #agGrid
   style="width: 100%; height: 100%;"
   id="myGrid"
   class="ag-theme-balham"
   [modules]="modules"
   [columnDefs]="columnDefs"
   [defaultColDef]="defaultColDef"
   [components]="components"
   [floatingFilter]="true"
   [debug]="true"
   [rowSelection]="rowSelection"
   [rowDeselection]="true"
   [rowModelType]="rowModelType"
   [cacheOverflowSize]="cacheOverflowSize"
   [maxConcurrentDatasourceRequests]="maxConcurrentDatasourceRequests"
   [infiniteInitialRowCount]="infiniteInitialRowCount"
   [maxBlocksInCache]="maxBlocksInCache"
   [pagination]="true"
   [paginationPageSize]="paginationPageSize"
   [cacheBlockSize]="cacheBlockSize"
   [getRowNodeId]="getRowNodeId"
   [rowData]="rowData"
   (gridReady)="onGridReady($event)"
 ></ag-grid-angular>
  `
  */
})
export class FourthExerciseComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
  public modules: Module[] = AllCommunityModules;

  private columnDefs;
  private defaultColDef;
  private components;
  private rowBuffer;
  private rowSelection;
  private rowModelType;
  private paginationPageSize;
  private cacheOverflowSize;
  private maxConcurrentDatasourceRequests;
  private infiniteInitialRowCount;
  private maxBlocksInCache;
  private rowData: [];


  constructor(private http: HttpClient) { 
    this.columnDefs = [
      {
        headerName: "ID",
        width: 50,
        valueGetter: "node.id",
        cellRenderer: "loadingRenderer"
      },
      {
        headerName: "Athlete",
        field: "athlete",
        width: 150
      },
      {
        headerName: "Age",
        field: "age",
        width: 90
      },
      {
        headerName: "Country",
        field: "country",
        width: 120
      },
      {
        headerName: "Year",
        field: "year",
        width: 90
      },
      {
        headerName: "Date",
        field: "date",
        width: 110
      },
      {
        headerName: "Sport",
        field: "sport",
        width: 110
      },
      {
        headerName: "Gold",
        field: "gold",
        width: 100
      },
      {
        headerName: "Silver",
        field: "silver",
        width: 100
      },
      {
        headerName: "Bronze",
        field: "bronze",
        width: 100
      },
      {
        headerName: "Total",
        field: "total",
        width: 100
      }
    ];

    this.defaultColDef = { resizable: true };
    
    this.components = {
      loadingRenderer: function(params) {
        if (params.value !== undefined) {
          return params.value;
        } else {
          return 'https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/images/loading.gif';
        }
      }
    };
    this.rowBuffer = 0;
    this.rowSelection = "multiple";
    this.rowModelType = "infinite";
    this.paginationPageSize = 100;
    this.cacheOverflowSize = 2;
    this.maxConcurrentDatasourceRequests = 1;
    this.infiniteInitialRowCount = 1000;
    this.maxBlocksInCache = 10;

  }

  ngOnInit() {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http.get<any>('https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json')
      .subscribe(data => {
        const dataSource = {
          rowCount: null,
          getRows: function(params) {
            console.log("asking for " + params.startRow + " to " + params.endRow);
            setTimeout(function() {
              var rowsThisPage = data.slice(params.startRow, params.endRow);
              var lastRow = -1;
           
              if (data.length <= params.endRow) {
                lastRow = data.length;
              }
              console.log(JSON.stringify(rowsThisPage));      
              params.successCallback(rowsThisPage, lastRow);
            }, 500);
          }
        };
        params.api.setDatasource(dataSource);
      });
  }


}
