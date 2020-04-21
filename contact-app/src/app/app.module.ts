import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionModule } from './session/session.module';
import { ContactModule } from './contact/contact.module';
import { AppBaseModule } from './app-base/app-base.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SessionModule,
    ContactModule,
    AppBaseModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
