import { Component, Input, OnInit } from '@angular/core';

import { User } from '../../../core/authentication';

@Component({
	selector: 'app-informations',
	templateUrl: './informations.component.html',
	styleUrls: ['./informations.component.scss']
})
export class ProfileInformationsComponent implements OnInit {

	@Input() user: User = new User();

	constructor() {
		
	}

	ngOnInit(): void {
	
	}
}