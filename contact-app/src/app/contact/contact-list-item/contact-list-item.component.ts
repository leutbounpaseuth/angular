import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Input()
  isSelected: boolean;

  @Output()
  selectedContact = new EventEmitter<Contact>();

  ngOnInit(): void {}

  getClasses() {
    return {
      even: this.isEven,
      odd: !this.isEven,
      selected: this.isSelected,
    };
  }

  selectContact(c: Contact) {
    if (!this.isSelected) {
      this.selectedContact.emit(c);
    } else {
      this.selectedContact.emit(null);
    }
  }
}
