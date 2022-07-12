import { Component, Input, OnInit } from '@angular/core';

import { AuthService, User } from '../../../core/authentication';

@Component({
	selector: 'app-edit-profile',
	templateUrl: './edit-profile.component.html',
	styleUrls: ['./edit-profile.component.scss']
})
export class ProfileEditComponent implements OnInit {

	@Input() user: User = new User();

	constructor(private authService: AuthService) {

	}

	ngOnInit(): void {

	}

	onSubmit(event: Event, user: User) {
		const target = event.target as HTMLInputElement;
		const files = target.files as FileList;
		if (files) {
			const foto = files[0];
			const formData: FormData = new FormData();
			formData.append("foto", foto);

			console.log(user)
			console.log(formData)
		}
	}
}
