import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ContactService } from './contact.service';
import { ContactMgrComponent } from './contact-mgr/contact-mgr.component';

@NgModule({
  declarations: [ContactMgrComponent],
  exports: [ContactMgrComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [ContactService],
})
export class ContactModule {}
