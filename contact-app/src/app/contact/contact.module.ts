import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ContactService } from './contact.service';
import { ContactMgrComponent } from './contact-mgr/contact-mgr.component';
import { ContactListItemComponent } from './contact-list-item/contact-list-item.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

@NgModule({
  declarations: [ContactMgrComponent, ContactListItemComponent, ContactDetailComponent],
  exports: [ContactMgrComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [ContactService],
})
export class ContactModule {}
