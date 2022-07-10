import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { AuthService } from '../../../core/authentication';
import { User } from '../../../core/authentication';

@Component({
	selector: 'app-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.scss']
})
export class ProfileOverviewComponent implements OnInit {

	user: User = new User();
	reactiveForm: FormGroup;

	constructor(private authService: AuthService, private fb: FormBuilder) {
		this.reactiveForm = this.fb.group({
			username: ['', [Validators.required]],
			email: ['', [Validators.required, Validators.email]],
			gender: ['', [Validators.required]],
			city: ['', [Validators.required]],
			address: ['', [Validators.required]],
			company: ['', [Validators.required]],
			mobile: ['', [Validators.required]],
			tele: ['', [Validators.required]],
			website: ['', [Validators.required]],
			date: ['', [Validators.required]],
		  });
	}

	ngOnInit(): void {
		this.user = this.authService.getAuthenticatedUser();
	}

	getErrorMessage(form: FormGroup) {
		return form.get('email')?.hasError('required')
		  ? 'You must enter a value'
		  : form.get('email')?.hasError('email')
		  ? 'Not a valid email'
		  : '';
	  }
}