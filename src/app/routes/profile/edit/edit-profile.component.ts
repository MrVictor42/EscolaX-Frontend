import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../../model/user.service';

import { User } from '../../../model/user';

@Component({
	selector: 'app-edit-profile',
	templateUrl: './edit-profile.component.html',
	styleUrls: ['./edit-profile.component.scss']
})
export class ProfileEditComponent implements OnInit {

	@Input() user: User = new User();

	constructor(private userService: UserService, private snackbar: MatSnackBar) {

	}

	ngOnInit(): void {

	}

	onSubmit() {

        this.userService.update(this.user, undefined).subscribe(response => {
            this.snackbar.open("Informações Atualizadas Com Sucesso!", "X");
            window.location.reload();
        }, errorResponse => {
            this.snackbar.open("Aconteceu Um Erro Ao Salvar Suas Informações.. Tente Novamente!", "X");
        });
	}
}
