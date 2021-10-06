import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { notifierModule } from './notifier/notifier.module';
import { ModalModule } from './modal/modal.module';

import { DataService } from './services/data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FilterService } from './services/filter.service';
import { SorterService } from './services/sorter.service';
import { TrackByService } from './services/trackby.service';
import { AuthService } from './services/auth.service';
import { EventBusService } from './services/event-bus.service';
import { OverlayModule } from './overlay/overlay.module';
@NgModule({
  imports: [CommonModule, OverlayModule,RouterModule, HttpClientModule, notifierModule, ModalModule],
  exports: [notifierModule, OverlayModule, RouterModule, HttpClientModule, ModalModule, NavbarComponent],
  declarations: [NavbarComponent],
  providers: [SorterService, FilterService, DataService, TrackByService,
     AuthService, EventBusService,
    //{ provide: 'Window', useFactory: () => window }
  ] // these should be singleton
})
export class CoreModule  {    

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
  }

}



