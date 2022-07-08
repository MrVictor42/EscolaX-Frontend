import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/authentication';

@Component({
	selector: 'app-reset-password',
	templateUrl: './reset-password.component.html',
	styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

	isSubmitting = false;

	loginForm = this.fb.group({
		username: ['', [Validators.required]]
	});

	constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {

	}

	get username() {
		return this.loginForm.get('username');
	}

	ngOnInit(): void {

	}

	onSubmit() : void {
		this.authService.changePasswordNoAuthenticated(this.username?.value!!);
	}

	backToLogin() : void {
		this.router.navigate(['/auth/login']);
	}
}