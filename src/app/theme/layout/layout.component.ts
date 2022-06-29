import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

	current_year : number = new Date().getFullYear();

	constructor() { }

	ngOnInit(): void {
	
	}
}