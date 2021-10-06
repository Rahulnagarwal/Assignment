import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PatientRoutingModule } from './patient-routing.module';

@NgModule({
  imports: [PatientRoutingModule, SharedModule],
  declarations: [PatientRoutingModule.components]
})
export class PatientModule { }
