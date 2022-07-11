import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../core/authentication';
import { User } from '../../../core/authentication';

@Component({
	selector: 'app-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.scss']
})
export class ProfileOverviewComponent implements OnInit {
	
	@Input() user: User = new User();

	constructor(private authService: AuthService) {

	}

	ngOnInit(): void {
		this.user = this.authService.getAuthenticatedUser();
	}
}