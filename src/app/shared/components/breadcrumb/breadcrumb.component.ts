import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../../bootstrap/menu.service';

@Component({
	selector: 'app-breadcrumb',
	templateUrl: './breadcrumb.component.html',
	styleUrls: ['./breadcrumb.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class BreadcrumbComponent implements OnInit {

	@Input() nav: string[] = [];

	constructor(private router: Router, private menu: MenuService) {

	}

	ngOnInit(): void {
		this.nav = Array.isArray(this.nav) ? this.nav : [];

		if (this.nav.length === 0) {
			this.genBreadcrumb();
		}
	}

	trackByNavlink(index: number, navlink: string): string {
		return navlink;
	}

	genBreadcrumb() {
		const routes = this.router.url.slice(1).split('/');
		this.nav = this.menu.getLevel(routes);
		this.nav.unshift('home');
	}
}