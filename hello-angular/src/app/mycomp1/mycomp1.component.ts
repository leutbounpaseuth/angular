import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomp1',
  templateUrl: './mycomp1.component.html',
  styleUrls: ['./mycomp1.component.css']
})
export class Mycomp1Component implements OnInit {

  value : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClickValue()
  {
    this.value++;
  } 

}
