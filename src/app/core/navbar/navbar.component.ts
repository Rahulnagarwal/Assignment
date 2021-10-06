import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { notifierService, notifierMessageType } from '../notifier/notifier.service';

@Component({
    selector: 'cm-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit, OnDestroy {

    isCollapsed: boolean;
    loginLogoutText = 'Logout';
    sub: Subscription;

    constructor(private router: Router,
        private authservice: AuthService,
        private notifier: notifierService ) { }

    ngOnInit() {
        this.sub = this.authservice.authChanged
            .subscribe((loggedIn: boolean) => {
                this.loginLogoutText;
            },
                (err: any) => console.log(err));
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    loginOrOut() {
        const isAuthenticated = this.authservice.isAuthenticated;
        if (isAuthenticated) {
            this.authservice.logout()
            this.loginLogoutText;
            this.notifier.notif('Bye', notifierMessageType.Info);
            //console.log("Bye");
            this.router.navigate(['/login']);
            return;
        }
        this.redirectToLogin();
    }

    redirectToLogin() {
        this.router.navigate(['/login']);
    }

    // setLoginLogoutText() {
    //     this.loginLogoutText = (this.authservice.isAuthenticated) ? 'Logout' : 'Doctor Login';
    // }

}
