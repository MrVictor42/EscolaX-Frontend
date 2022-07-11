import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../core/authentication';
import { User } from '../../../core/authentication';

@Component({
	selector: 'app-informations',
	templateUrl: './informations.component.html',
	styleUrls: ['./informations.component.scss']
})
export class ProfileInformationsComponent implements OnInit {

	user: User = new User();

	constructor(private authService: AuthService) {
		
	}

	ngOnInit(): void {
		this.user = this.authService.getAuthenticatedUser();
	}
}