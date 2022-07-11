import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AuthService } from '../../../core/authentication';
import { User } from '../../../core/authentication';

@Component({
	selector: 'app-edit-profile',
	templateUrl: './edit-profile.component.html',
	styleUrls: ['./edit-profile.component.scss']
})
export class ProfileEditComponent implements OnInit {

	user: User = new User();
	reactiveForm: FormGroup;

	constructor(private authService: AuthService, private fb: FormBuilder) {
		this.reactiveForm = this.fb.group({

		});
	}

	ngOnInit(): void {
		this.user = this.authService.getAuthenticatedUser();
	}
}
