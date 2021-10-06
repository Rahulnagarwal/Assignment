import { EventEmitter, Injectable, Output } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { IUserLogin } from '../../shared/interfaces';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    [x: string]: any;

    isAuthenticated = false;    //other components can check on this var.
    uid = "";
    redirectUrl: string;
    @Output() authChanged: EventEmitter<boolean> = new EventEmitter<boolean>();


    constructor(private router: Router, private afAuth: AngularFireAuth) {
        this.isAuthenticated = false;

        this.afAuth.onAuthStateChanged((user) => {                          // set up a subscription
            if (user) {
                this.uid = user.uid;
                this.isAuthenticated = true;
            } else {
                this.isAuthenticated = false;
            }
        });
    }

    private userAuthChanged(status: boolean) {
        this.authChanged.emit(status); // Raise changed event
    }

    signupUser(user: any): Promise<any> {
        return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
            .then((result) => {
                let emailLower = user.email.toLowerCase();
                result.user?.sendEmailVerification();                         //   ?
            })
            .catch(error => {
                console.log('Auth Service: signup error', error);
                if (error.code)
                    return { isValid: false, message: error.message };
                else { return; }
            });
    }

    login(creds: IUserLogin): Promise<any> {
        return this.afAuth.signInWithEmailAndPassword(creds.email, creds.password)
            .then(() => {
                this.isAuthenticated = true;
                this.userAuthChanged(true);
                console.log('Auth Service: loginUser: success');

                return true;
            })
            .catch(error => {
                console.log('Auth Service: login error..');
                console.log('error code', error.code);
                console.log('error', error);
                if (error.code)
                    return  false ;
                else { return ; }
            });
    }

    logout(): boolean {
        console.log("logout")
        this.afAuth.signOut();
        let loggedOut = true;
        this.isAuthenticated = !loggedOut;
        this.userAuthChanged(!loggedOut); // Return loggedIn status
        return loggedOut;
    }
}
