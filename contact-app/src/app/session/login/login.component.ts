import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(public sessionService: SessionService) {}

  @Output()
  loginOutput = new EventEmitter<string>();

  ngOnInit(): void {}

  onSubmit() {
    this.sessionService.login(this.username, this.password, (response) => {
      this.loginOutput.emit('' + response.sessionId);
    });
  }
}
