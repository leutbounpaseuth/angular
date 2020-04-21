import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-statusbar',
  templateUrl: './statusbar.component.html',
  styleUrls: ['./statusbar.component.css'],
})
export class StatusbarComponent implements OnInit {
  constructor(public sharedData: SharedDataService) {}

  ngOnInit(): void {}
}
