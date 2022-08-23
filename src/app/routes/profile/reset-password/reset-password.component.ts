import { Component, Input, OnInit } from '@angular/core';

import { AlertService } from '../../../theme/alert/alert.service';
import { User } from '../../../model/user';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/model/user.service';

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

	constructor(private fb: FormBuilder, private alertService: AlertService, private userService : UserService) {

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
		this.alertService.clear();

		this.userService.changePassword(this.user, this.password?.value!!).subscribe(response => {
			this.alertService.displaySuccess('Senha Alterada Com Sucesso');
			this.isSubmitting = false;
			this.loginForm.reset();
		}, errorResponse => {
			this.alertService.displayError('Aconteceu Algum Erro... Tente Novamente.');
			this.isSubmitting = false;
			this.loginForm.reset();
		});
	}
}
