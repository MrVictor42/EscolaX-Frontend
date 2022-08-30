import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/core/authentication';

@Component({
	selector: 'app-user-panel',
	templateUrl: './user-panel.component.html',
	styleUrls: ['./user-panel.component.scss'],
})
export class UserPanelComponent implements OnInit {

	user: User = new User();
    urlAvatar: string = "../../../assets/images/avatar.jpg";
	eventSelected: any;

	constructor(private authService : AuthService, private router: Router) {

	}

	ngOnInit(): void {
		this.authService.getAuthenticatedUser().subscribe(response => {
			this.user = response;
		});
	}

	logout() {
		this.authService.logout();
		this.router.navigateByUrl('/auth/login');
	}
}
