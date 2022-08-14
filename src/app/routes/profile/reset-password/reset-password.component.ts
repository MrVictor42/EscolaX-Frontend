import { Component, Input, OnInit } from '@angular/core';

import { AlertService } from '../../../theme/alert/alert.service';
import { User } from '../../../model/user';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
	selector: 'app-reset-password',
	templateUrl: './reset-password.component.html',
	styleUrls: ['./reset-password.component.scss']
})
export class ProfileResetPasswordComponent implements OnInit {

	@Input() user: User = new User();
	isSubmitting: Boolean = false;
	
	loginForm = this.fb.group({
		password: ['', [Validators.required, Validators.minLength(6)]],
		confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
	});

	constructor(private fb: FormBuilder, private alertService: AlertService) {

	}

	ngOnInit(): void {

	}

	get password() {
		return this.loginForm.get('password');
	}

	get confirmPassword() {
		return this.loginForm.get('confirmPassword');
	}

	onSubmit() : void {
		this.isSubmitting = true;

		console.log(this.password?.value, this.confirmPassword?.value)
		
	}
}
