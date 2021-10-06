import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatientsComponent } from './patients.component';
import { PatientsCardComponent } from './patients-card/patients-card.component';
import { PatientsGridComponent } from './patients-grid/patients-grid.component';

const routes: Routes = [
  { path: '', component: PatientsComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PatientsRoutingModule {
  static components = [ PatientsComponent, PatientsCardComponent, PatientsGridComponent ];
}
