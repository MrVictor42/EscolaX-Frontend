import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateLangService } from 'src/app/core/bootstrap/translate-lang.service';
import { AlertService } from 'src/app/theme/alert/alert.service';
import { AuthService } from '../../../core/authentication/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	isSubmitting : Boolean = false;
	school: string = "Escola X";
	currentLanguage: string = "";

	loginForm = this.fb.group({
		username: ['', [Validators.required]],
		password: ['', [Validators.required]],
	});

	constructor(private fb: FormBuilder, private router: Router,
		private authService: AuthService, private language: TranslateLangService,
		private alertService: AlertService) {
	}

	ngOnInit(): void {

	}

	get username() {
		return this.loginForm.get('username');
	}

	get password() {
		return this.loginForm.get('password');
	}

	message : string[] = [];

	onSubmit(): void {
		this.isSubmitting = true;
		this.alertService.clear();

		this.authService.login(this.username!!.value!!, this.password!!.value!!).subscribe(response => {
			const access_token = JSON.stringify(response);
			localStorage.setItem("access_token", access_token);
			this.router.navigate(['/home']);
		}, erroResponse => {
			this.isSubmitting = false;
			if (this.language.getCurrentLanguage() == "pt-BR") {
				this.alertService.displayError("Usuário e/ou senha incorreto(s).");
			} else {
				this.alertService.displayError("The username or password you entered is incorrect.");
			}
		});
	}
}
