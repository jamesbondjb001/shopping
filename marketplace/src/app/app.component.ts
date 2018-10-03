import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navMenuLoaded = 'home';

  onNavigate(navMenuApp : string){
    console.log(navMenuApp);
    this.navMenuLoaded = navMenuApp;
  }
}
