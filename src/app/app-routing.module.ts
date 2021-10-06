import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';

import { PreloadModulesStrategy } from './core/strategies/preload-modules.strategy';
import { AuthGuard } from './core/services/auth.guard';

const app_routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: () => import('./patients/patients.module').then(m => m.PatientsModule), canActivate: [AuthGuard] },
  { path: 'patients/:patientID', data: { preload: true }, loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule), canActivate: [AuthGuard] },
  { path: 'patients', loadChildren: () => import('./patients/patients.module').then(m => m.PatientsModule), canActivate: [AuthGuard] },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: '**', pathMatch: 'full', loadChildren: () => import('./patients/patients.module').then(m => m.PatientsModule), canActivate: [AuthGuard] } // catch any unfound routes and redirect to home page

  // NOTE: If you're using Angular 7 or lower you'll lazy loads routes the following way

  // { path: 'patients/:id', data: { preload: true }, loadChildren: 'app/patient/patient.module#PatientModule' },
  // { path: 'patients', loadChildren: 'app/patients/patients.module#PatientsModule' },
  // { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadModulesStrategy, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers: [PreloadModulesStrategy]
})
export class AppRoutingModule { }
