import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css'],
})
export class ContactDetailComponent implements OnInit {
  @Input()
  contact: Contact;

  contactForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      firstName: new FormControl(),
      address: new FormGroup({
        streetAddress1: new FormControl(),
      }),
    });
  }

  onSubmit() {}
}
