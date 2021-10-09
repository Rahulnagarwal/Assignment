import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';

import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { SignupModule } from './signup/signup.module';

@NgModule({
  imports: [
    BrowserModule,
    LoginModule,          // Eager loaded since we may need to go here right away as browser loads based on route user enters
    SignupModule,
    AppRoutingModule,     // Main routes for application
    CoreModule,           // Singleton objects (services, components that are loaded only once, etc.)
    SharedModule,          // Shared (multi-instance) objects
    AngularFireModule.initializeApp(environment.firebase),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
