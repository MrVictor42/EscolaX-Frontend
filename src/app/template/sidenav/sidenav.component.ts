import { Component, OnInit, EventEmitter, Input, ViewEncapsulation, Output } from '@angular/core';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class SidenavComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {

	}

	@Input() showToggle = true;
	@Input() showUser = true;
	@Input() showHeader = true;
	@Input() toggleChecked = false;

	@Output() toggleCollapsed = new EventEmitter<void>();
}