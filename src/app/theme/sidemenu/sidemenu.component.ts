import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { MenuService } from 'src/app/core/bootstrap/menu.service';

import { InMemoryDbService, RequestInfo, STATUS } from 'angular-in-memory-web-api';
import { Observable, pipe } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { find, map, switchMap } from 'rxjs/operators';

@Component({
	selector: 'app-sidemenu',
	templateUrl: './sidemenu.component.html',
	styleUrls: ['./sidemenu.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class SidemenuComponent implements OnInit {

	@Input() ripple = false;

	menu$ = this.menu.getAll();
	buildRoute = this.menu.buildRoute;

	constructor(private menu: MenuService) {

	}

	ngOnInit(): void {
		ajax('assets/data/menu.json').subscribe((response: any) => {
			this.menu.set(response.response.menu)
		})
	}
}