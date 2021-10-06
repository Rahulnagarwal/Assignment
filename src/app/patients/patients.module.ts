import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PatientsRoutingModule } from './patients-routing.module';

@NgModule({
  imports: [PatientsRoutingModule, SharedModule],
  declarations: [PatientsRoutingModule.components]
})
export class PatientsModule { }
