import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './session/login/login.component';
import { ContactMgrComponent } from './contact/contact-mgr/contact-mgr.component';

import { SessionService } from './session/session.service';

@NgModule({
  declarations: [AppComponent, LoginComponent, ContactMgrComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [SessionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
