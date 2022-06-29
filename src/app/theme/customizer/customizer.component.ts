import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { SettingsService } from '../../core/bootstrap/settings.service';
import { AppSettings } from '../../core/settings';
import { CdkDragStart } from '@angular/cdk/drag-drop';

@Component({
	selector: 'app-customizer',
	templateUrl: './customizer.component.html',
	styleUrls: ['./customizer.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class CustomizerComponent implements OnInit {

	@Output() optionsChange = new EventEmitter<AppSettings>();

	options = this.settings.getOptions();
	opened = false;
	dragging = false;

	constructor(private settings: SettingsService) {

	}

	ngOnInit(): void {

	}

	handleDragStart(event: CdkDragStart) {
		this.dragging = true;
	}

	openPanel(event: MouseEvent) {
		if (this.dragging) {
			this.dragging = false;
			return;
		}
		this.opened = true;
	}

	closePanel() {
		this.opened = false;
	}

	togglePanel() {
		this.opened = !this.opened;
	}

	sendOptions() {
		this.optionsChange.emit(this.options);
	}
}
