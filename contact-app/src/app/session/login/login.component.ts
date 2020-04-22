import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(public sessionService: SessionService, public router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.sessionService.login(this.username, this.password, (response) => {
      this.router.navigate(['']);
    });
  }
}
