import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { ContactMgrComponent } from './contact-mgr/contact-mgr.component';



@NgModule({
  declarations: [ContactComponent, ContactMgrComponent],
  imports: [
    CommonModule
  ]
})
export class ContactModule { }
