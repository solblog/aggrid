import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpRemoteService} from '../services/http-remote.service'

@Component({
  selector: 'app-third-exercise',
  templateUrl: './third-exercise.component.html',
  styleUrls: ['./third-exercise.component.scss']
})
export class ThirdExerciseComponent implements OnInit {

  title = 'app';

  columnDefs = [
      {headerName: 'Make', field: 'make', sortable: true, filter: true},
      {headerName: 'Model', field: 'model', sortable: true, filter: true},
      {headerName: 'Price', field: 'price', sortable: true, filter: true}
  ];

  rowData: any;

  constructor(private http: HttpClient, private myServiceUrl: HttpRemoteService) {

  }

  ngOnInit() {
      // this.rowData = this.http.get('http://localhost:3000/foods');
      // this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
      this.rowData = this.http.get(this.myServiceUrl.geCarsService());
  }

  
}
