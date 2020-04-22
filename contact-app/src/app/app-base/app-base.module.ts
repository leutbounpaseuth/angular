import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { SharedDataService } from './shared-data.service';
import { StatusbarComponent } from './statusbar/statusbar.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    StatusbarComponent,
    AboutComponent,
    WelcomeComponent,
    NavbarComponent,
  ],
  exports: [
    StatusbarComponent,
    AboutComponent,
    WelcomeComponent,
    NavbarComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  providers: [SharedDataService],
})
export class AppBaseModule {}
