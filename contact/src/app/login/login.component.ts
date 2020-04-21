import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  @Output()
  loginOutput = new EventEmitter<string>();

  ngOnInit(): void {
  }

  loginClick()
  {
    this.loginOutput.emit('Leut Bounpaseuth');
  } 
}
