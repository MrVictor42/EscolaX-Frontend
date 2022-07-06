import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/core/authentication';

@Component({
	selector: 'app-user-panel',
	templateUrl: 'user-panel.component.html',
	styleUrls: ['./user-panel.component.scss'],
})
export class UserPanelComponent implements OnInit {

	user: User = new User();

	constructor(private authService : AuthService, private router: Router) {

	}

	ngOnInit(): void {
		this.user = this.authService.getAuthenticatedUser();
		console.log(this.user)
	}

	logout() {
		this.authService.logout();
		this.router.navigateByUrl('/auth/login');
	}
}
