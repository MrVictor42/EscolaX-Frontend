import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Alert } from './alert';
import { AlertSettings } from './alert-settings';

@Injectable({ providedIn: 'root' })

export class AlertService {

	private subject = new BehaviorSubject<Alert|any>(null);
	private defaultId = 'default-alert';

	constructor() {

	}

	onAlert(id = this.defaultId): Observable<Alert> {
		return this.subject.asObservable().pipe(filter(x => x && x.id === id));
	}

	success(message: string, options?: any) {
		this.alert(new Alert({ ...options, alertType: AlertSettings.SUCCESS, message }));
	}

	error(message: string, options?: any) {
		this.alert(new Alert({ ...options, alertType: AlertSettings.ERROR, message }));
	}

	info(message: string, options?: any) {
		this.alert(new Alert({ ...options, alertType: AlertSettings.INFO, message }));
	}

	warn(message: string, options?: any) {
		this.alert(new Alert({ ...options, alertType: AlertSettings.WARNING, message }));
	}

	alert(alert: Alert) {
		alert.id = alert.id || this.defaultId;
		this.subject.next(alert);
	}

	clear(id = this.defaultId) {
		this.subject.next(new Alert({ id }));
	}

	displayError(message: string) {
		this.error(message,
			{ autoClose: false }
		);
	}

	displaySuccess(message: string) {
		this.success(message,
			{ autoClose: false }
		);
	}
}