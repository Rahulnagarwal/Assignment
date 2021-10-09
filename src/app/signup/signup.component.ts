import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../core/services/auth.service';
import { IUserLogin } from '../shared/interfaces';
import { notifierService, notifierMessageType } from '../core/notifier/notifier.service';

@Component({
    selector: 'cm-signup',
    templateUrl: './signup.component.html',
    styleUrls: [ './signup.component.css' ]
})
export class SignupComponent implements OnInit {
    signupForm: FormGroup;
    errorMessage: string;

    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private authService: AuthService,
                private notifier: notifierService ) 
                { }

    ngOnInit() {
        this.signuppForm();
    }

    signuppForm() {
        this.signupForm = this.formBuilder.group({
            email:      [''],
            password:   ['']
        });
    }

    submit({ value, valid }: { value: IUserLogin, valid: boolean }) {
        this.authService.signupUser(value)
        .then((status: boolean) => {
                if (status) 
                    {
                    if (this.authService.redirectUrl) {
                        const redirectUrl = this.authService.redirectUrl;
                        console.log("signup redirect url", redirectUrl)
                        this.authService.redirectUrl = '';
                        this.router.navigate([redirectUrl]);
                    
                    } else {
                        console.log("signup: no redirect url")
                        this.router.navigate(['/patients']);
                        this.notifier.notif('Welcome', notifierMessageType.Info);
                        //console.log("Welcome");
                    }
                } else {
                    const signupError = 'Unable to signup';
                    this.errorMessage = signupError;
                    this.notifier.notif(signupError, notifierMessageType.Danger);
                    //alert("signup or password is wrong");
                }
            },
            (err: any) => console.log(err));
    }

}
