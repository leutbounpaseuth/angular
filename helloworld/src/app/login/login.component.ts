import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  loginOutput = new EventEmitter<string>();

  loginClick()
  {
    this.loginOutput.emit('Leut Bounpaseuth');
  } 
}
