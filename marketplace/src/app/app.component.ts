import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navMenuLoaded = 'login';

  onNavigate(navMenuApp : string){
    console.log(navMenuApp);
    this.navMenuLoaded = navMenuApp;
  }
}
