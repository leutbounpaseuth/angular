import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedDataService } from './shared-data.service';
import { StatusbarComponent } from './statusbar/statusbar.component';

@NgModule({
  declarations: [StatusbarComponent],
  exports: [StatusbarComponent],
  imports: [CommonModule],
  providers: [SharedDataService],
})
export class AppBaseModule {}
