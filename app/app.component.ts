import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Dashboard Project';

  authentication = sessionStorage.getItem('mytoken');
  
  logout() {
    sessionStorage.removeItem('mytoken');
    window.open("/login", "_self");
  }


}

