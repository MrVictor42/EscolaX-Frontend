import { APP_INITIALIZER } from '@angular/core';
import { TranslateLangService } from './bootstrap/translate-lang.service';
export function TranslateLangServiceFactory(translateLangService: TranslateLangService) {
	return () => translateLangService.load();
}
import { StartupService } from './bootstrap/startup.service';
export function StartupServiceFactory(startupService: StartupService) {
	return () => startupService.load();
}

export const appInitializerProviders = [
	{
		provide: APP_INITIALIZER,
		useFactory: TranslateLangServiceFactory,
		deps: [TranslateLangService],
		multi: true,
	},
	{
		provide: APP_INITIALIZER,
		useFactory: StartupServiceFactory,
		deps: [StartupService],
		multi: true,
	},
];