import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public sessionService: SessionService) { }

  username: string = '';
  password: string = '';

  @Output()
  loginOutput = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onBlurUsername(ev) {
    this.username = ev.target.value;
  }

  onBlurPassword(ev) {
    this.password = ev.target.value;
  }


  loginClick() {
    if (this.sessionService.checkLogin(this.username, this.password)) {
      this.loginOutput.emit(this.username + ' OK');
    }
    else {
      this.loginOutput.emit('ERROR');
    }

  }
}
