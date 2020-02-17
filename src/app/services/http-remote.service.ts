import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpRemoteService implements OnInit {

  constructor() {
    this.carsService = this.carsFromMyJsonApi;
  }

  private mockoon: string = 'http://localhost:3001';
  
  private carsFromMyJsonApi: string = 'https://api.myjson.com/bins/15psn9';
  private carsFromMockoon: string = this.mockoon + '/cars';

  private carsService : string;

  ngOnInit(){
    // Absurd , we do not render the services ???
  }

  public geCarsService(){
    return this.carsService;
  }

  public setCarsFromMyJsonApi(){
    this.carsService = this.carsFromMyJsonApi; 
  }

  public setCarsFromMockoon(){
    this.carsService =  this.carsFromMockoon;
  }

}
