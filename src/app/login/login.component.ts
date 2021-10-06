import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../core/services/auth.service';
import { IUserLogin } from '../shared/interfaces';
import { notifierService, notifierMessageType } from '../core/notifier/notifier.service';

@Component({
    selector: 'cm-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    errorMessage: string;

    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private authService: AuthService,
                private notifier: notifierService ) 
                { }

    ngOnInit() {
        this.loginnForm();
    }

    loginnForm() {
        this.loginForm = this.formBuilder.group({
            email:      [''],
            password:   ['']
        });
    }

    submit({ value, valid }: { value: IUserLogin, valid: boolean }) {
        this.authService.login(value)
        .then((status: boolean) => {
                if (status) 
                    {
                    if (this.authService.redirectUrl) {
                        const redirectUrl = this.authService.redirectUrl;
                        console.log("login redirect url", redirectUrl)
                        this.authService.redirectUrl = '';
                        this.router.navigate([redirectUrl]);
                    
                    } else {
                        console.log("login: no redirect url")
                        this.router.navigate(['/patients']);
                        this.notifier.notif('Welcome', notifierMessageType.Info);
                        //console.log("Welcome");
                    }
                } else {
                    const loginError = 'Unable to login';
                    this.errorMessage = loginError;
                    this.notifier.notif(loginError, notifierMessageType.Danger);
                    //alert("login or password is wrong");
                }
            },
            (err: any) => console.log(err));
    }

}
