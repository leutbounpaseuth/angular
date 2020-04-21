import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppBaseModule } from '../app-base/app-base.module';
import { LoginComponent } from './login/login.component';
import { SessionService } from './session.service';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [CommonModule, HttpClientModule, AppBaseModule],
  providers: [SessionService],
})
export class SessionModule {}
