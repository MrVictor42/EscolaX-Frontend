import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/authentication';
import { User } from '../../../core/authentication';

@Component({
	selector: 'app-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.scss']
})
export class ProfileOverviewComponent implements OnInit {
	
	user: User = new User();

	constructor(private authService: AuthService) {

	}

	ngOnInit(): void {
		this.authService.getAuthenticatedUser().subscribe(response => {
			this.user = response;
		});
	}
}