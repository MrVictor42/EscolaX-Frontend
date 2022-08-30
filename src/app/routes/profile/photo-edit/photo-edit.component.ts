import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UserService } from '../../../model/user.service';
import { User } from '../../../model/user';

@Component({
    selector: 'app-photo-edit',
    templateUrl: './photo-edit.component.html',
    styleUrls: ['./photo-edit.component.scss']
})
export class PhotoEditComponent implements OnInit {

    @Input() user: User = new User();
    urlAvatar: string = "../../../assets/images/avatar.jpg";
	eventSelected: any;

    constructor(private userService: UserService, private snackbar: MatSnackBar) {

    }

    ngOnInit(): void {

    }

    onSubmit() {
        if (this.eventSelected != null) {
			const formData: FormData = new FormData();
			const target = this.eventSelected.target.files;
			const photo = target.item(0);

			formData.append('photo', photo);

			this.userService.update(this.user, formData).subscribe(response => {
				this.snackbar.open("Informações Atualizadas Com Sucesso!", "X");
                window.location.reload();
			});
		} else {
			this.userService.update(this.user, undefined).subscribe(response => {
				this.snackbar.open("Informações Atualizadas Com Sucesso!", "X");
                window.location.reload();
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
