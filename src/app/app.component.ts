import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  // User setting/preference API - which will fetch the SAVEed
  // if user has saved DarkTheme is true, else it will be false
  isDarktheme =false;

  toggleTheme(){
    this.isDarktheme=!this.isDarktheme;
  }
}
