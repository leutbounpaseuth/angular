import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginInput = '';
  isLogged = false;

  onLoginOk(s : string) {
    this.isLogged = true;
    this.loginInput = s;
  }
}
