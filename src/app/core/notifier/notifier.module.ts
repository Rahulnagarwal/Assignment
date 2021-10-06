import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { notifierComponent } from './notifier.component';
import { notifierService } from './notifier.service';

@NgModule({
  imports: [CommonModule],
  exports: [notifierComponent],
  providers: [notifierService],
  declarations: [notifierComponent]
})
export class notifierModule   {    // Ensure that notifierModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: notifierModule) {
  }
}
