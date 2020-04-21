import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public contactService: ContactService) { }

  @Input()
  username = '?';

  ngOnInit(): void {
  }

}
