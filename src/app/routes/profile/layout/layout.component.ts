import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/authentication';
import { User } from '../../../model/user';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss']
})
export class ProfileLayoutComponent implements OnInit {

	user: User = new User();

	constructor(private authService : AuthService) {

	}

	ngOnInit(): void {

	}
}