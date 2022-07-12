import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService, User } from '../../../core/authentication';

@Component({
	selector: 'app-edit-profile',
	templateUrl: './edit-profile.component.html',
	styleUrls: ['./edit-profile.component.scss']
})
export class ProfileEditComponent implements OnInit {

	@Input() user: User = new User();
	urlAvatar: string = "../../../../assets/images/avatar.jpg";
	isNull: boolean = false;
	eventSelected: any;

	constructor(private authService: AuthService, private snackbar: MatSnackBar) {

	}

	ngOnInit(): void {
		this.user.avatar ? null : this.isNull = true;
	}

	onSubmit(user: User) {
		if (this.eventSelected != null) {
			const formData: FormData = new FormData();
			const target = this.eventSelected.target.files;
			const avatar = target.item(0);

			formData.append('avatar', avatar)

			formData.forEach((value, key) => {
				console.log(key + " " + value)
			});
		}
	}

	changePhoto(event: Event) {
		const target: any = event.target as HTMLInputElement;
		const file: File = (target.files as FileList)[0];
		this.eventSelected = event;

		if (file) {
			const reader: FileReader = new FileReader();

			reader.readAsDataURL(file);
			reader.onload = (event: any) => {
				this.urlAvatar = event.target.result;
			}
		}
	}
}
