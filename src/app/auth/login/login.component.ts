import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: 'login.component.html',
	styleUrls: ['./login.component.css'],
	styles: [

	]
})
export class LoginComponent implements OnInit {

	username: string = "";
	password: string = "";
	cadastrando: boolean = false;
	mensagemSucesso: string | null = "";
	errors: string[] = [];

	constructor(private router : Router, private authService : AuthService) { }

	ngOnInit(): void {

	}

	preparaCadastrar(event: { preventDefault: () => void; }) {
		event.preventDefault();
		this.cadastrando = true;
	}

	cancelaCadastro() {
		this.cadastrando = false;
	}

	cadastrar() {
		const user: User = new User();

		user.username = this.username;
		user.password = this.password;

		console.log(user)

		// this.authService.salvar(usuario).subscribe(response => {
		// 	this.mensagemSucesso = "Cadastro realizado com sucesso! Efetue o Login.";
		// 	this.errors = [];
		// 	this.cadastrando = false;
		// 	this.username = "";
		// 	this.password = "";
		// }, erroResponse => {
		// 	console.log(erroResponse)
		// 	this.mensagemSucesso = null;
		// 	this.errors = erroResponse.error.errors;
		// });
	}

	onSubmit() {
		this.authService.login(this.username, this.password).subscribe(response => {
			const access_token = JSON.stringify(response);
			localStorage.setItem("access_token", access_token);
			console.log(localStorage.getItem("access_token"));
			this.router.navigate(['/home'])
		}, erroResponse => {
			this.errors = ["Usuário e/ou senha incorreto(s)."];
		});
	}
}