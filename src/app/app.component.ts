import { Component } from '@angular/core';
import { ApiRequestService } from './shared/services/api-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'community-portal-hiims';


  constructor(private apiService: ApiRequestService) {

  }

  callApi() {
    return this.apiService.get('food').then((res) => {
      console.log(res);
    });

  }
}
