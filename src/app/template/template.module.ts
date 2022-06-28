import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HeaderComponent } from '../template/header/header.component';
import { LayoutComponent } from '../template/layout/layout.component';
import { SidenavComponent } from '../template/sidenav/sidenav.component';
import { BrandingComponent } from '../template/widgets/branding.component';
import { GithubButtonComponent } from './widgets/github.component';
import { NotificationComponent } from './widgets/notification.component';
import { SharedModule } from '../core/shared/shared.module';

@NgModule({
	declarations: [
		LayoutComponent,
		SidenavComponent,
		HeaderComponent,
		BrandingComponent,
		GithubButtonComponent,
		NotificationComponent
	],
	imports: [
		SharedModule
	],
	exports: [
		LayoutComponent
	],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TemplateModule { 

}