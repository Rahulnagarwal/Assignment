import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PatientEditComponent } from '../patient-edit/patient-edit.component';
@Injectable()
export class CanDeactivateGuard implements CanDeactivate<PatientEditComponent> {

  constructor( ) {}
  canDeactivate(
    component: PatientEditComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
  
  Observable<boolean> | Promise<boolean> | boolean {
    console.log(`PatientId: ${route.parent.params['id']} URL: ${state.url}`);
    // Check with component to see if we're able to deactivate
    return component.canDeactivate();
  }
}
