import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { MenuService } from 'src/app/core/bootstrap/menu.service';

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

	}
}