import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../../core/authentication/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	isSubmitting = false;
	school : string = "Escola X";

	loginForm = this.fb.group({
		username: ['', [Validators.required]],
		password: ['', [Validators.required]],
	});

	constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {

	}

	ngOnInit(): void {

	}

	get username() {
		return this.loginForm.get('username');
	}

	get password() {
		return this.loginForm.get('password');
	}

	onSubmit() {
		this.isSubmitting = true;

		this.authService.login(this.username!!.value!!, this.password!!.value!!).subscribe(response => {
			const access_token = JSON.stringify(response);
			localStorage.setItem("access_token", access_token);
			this.router.navigate(['/home'])
		}, erroResponse => {
			alert("NÃO AUTENTICADO")
			this.isSubmitting = false;
		});
	}
}