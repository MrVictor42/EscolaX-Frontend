import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PreloaderService } from './core/bootstrap/preloader.service';

@Component({
	selector: 'app-root',
	template: '<router-outlet></router-outlet>',
	styles: [

	]
})
export class AppComponent implements OnInit, AfterViewInit {

	constructor(private preloader: PreloaderService) { }

	ngOnInit() { }

	ngAfterViewInit() {
		this.preloader.hide();
	}
}