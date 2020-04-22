import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css'],
})
export class ContactListItemComponent implements OnInit {
  constructor() {}

  @Input()
  contact: Contact;

  @Input()
  isEven: boolean;

  getClasses() {
    return {
      even: this.isEven,
      odd: !this.isEven,
    };
  }

  ngOnInit(): void {}
}
