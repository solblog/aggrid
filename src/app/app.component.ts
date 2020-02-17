import { Component,OnInit } from '@angular/core';
import { HttpRemoteService} from './services/http-remote.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public usedService:string = 'Remote service';

  constructor(private httpRemoteService : HttpRemoteService){

  }

  ngOnInit(){
    this.usedService = this.httpRemoteService.geCarsService();
  }

  setCarsProviderMockoon(){
    this.httpRemoteService.setCarsFromMockoon();
    this.usedService = this.httpRemoteService.geCarsService();
  }

  setCarsProviderMyJsonApi(){
    this.httpRemoteService.setCarsFromMyJsonApi();
    this.usedService = this.httpRemoteService.geCarsService();
  }

}
