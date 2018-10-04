import { Component, Output } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 navMenuLoaded = 'login';
 loginFlagSuccess = false;
 
  onNavigate(navMenuApp : string){
    console.log(navMenuApp);
    this.navMenuLoaded = navMenuApp;
    if(navMenuApp=='login'){
      this.loginFlagSuccess = false;
      localStorage.removeItem('currentUser');
    }
    
  }
  onSuccessLogin(home : string){
    this.loginFlagSuccess = true;
    this.navMenuLoaded = 'home';
  }
}
