import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal.component';
import { ModalService } from './modal.service';

@NgModule({
  imports: [CommonModule],
  exports: [ModalComponent],
  declarations: [ModalComponent],
  providers: [ModalService]
})
export class ModalModule   {    // Ensure that ModalModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: ModalModule) {
  }

}
