import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  checkLogin(username : string, password : string) : boolean
  {
    return username === password;
  } 
}
