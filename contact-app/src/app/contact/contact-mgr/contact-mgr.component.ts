import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-mgr',
  templateUrl: './contact-mgr.component.html',
  styleUrls: ['./contact-mgr.component.css'],
})
export class ContactMgrComponent implements OnInit {
  constructor(public contactService: ContactService) {}

  contactList: Contact[];
  selectedContact: Contact;

  ngOnInit(): void {
    this.contactService.listAll((response) => {
      this.contactList = response;
    });
  }

  onSelected(c: Contact) {
    this.selectedContact = c;
  }
}
