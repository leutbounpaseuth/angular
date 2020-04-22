import { Component, OnInit, Input, Output } from '@angular/core';
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

  @Output()
  selectedContact: Contact;

  ngOnInit(): void {}

  getClasses() {
    return {
      even: this.isEven,
      odd: !this.isEven,
      selected: this.selectedContact?.id == this.contact.id ? true : false,
    };
  }

  selectContact(c: Contact) {
    if (this.selectedContact?.id == this.contact.id) {
      this.selectedContact = null;
    } else {
      this.selectedContact = c;
    }
  }
}
