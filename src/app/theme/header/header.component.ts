import {
	Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy, ViewEncapsulation
} from '@angular/core';
import screenfull from 'screenfull';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	host: {
		class: 'matero-header',
	},
	styleUrls: ['./header.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {

	}

	@Input() showToggle = true;
	@Input() showBranding = false;

	@Output() toggleSidenav = new EventEmitter<void>();
	@Output() toggleSidenavNotice = new EventEmitter<void>();

	toggleFullscreen() {
		if (screenfull.isEnabled) {
			screenfull.toggle();
		}
	}
}