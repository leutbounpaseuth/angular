import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  username : string = '';
  password : string = '';

  @Output()
  loginOutput = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onBlurUsername(ev)
  {
    this.username = ev.target.value;
  } 

  onBlurPassword(ev)
  {
    this.password = ev.target.value;
  } 


  loginClick()
  {
    this.loginOutput.emit(this.username);
  } 
}
