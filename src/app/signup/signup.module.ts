import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { SignupRoutingModule } from './signup-routing.modue';

@NgModule({
  imports: [ ReactiveFormsModule, SharedModule, SignupRoutingModule ],
  declarations: [ SignupRoutingModule.components ]
})
export class SignupModule { } 