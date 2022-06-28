import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedModule } from '../core/shared/shared.module';
import { HeaderComponent } from '../template/header/header.component';
import { LayoutComponent } from '../template/layout/layout.component';
import { BrandingComponent } from '../template/widgets/branding.component';
import { GithubButtonComponent } from './widgets/github.component';
import { NotificationComponent } from './widgets/notification.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserPanelComponent } from './sidebar/user-panel.component';
import { SidebarNoticeComponent } from './sidebar-notice/sidebar-notice.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

@NgModule({
	declarations: [
		LayoutComponent,
		HeaderComponent,
		BrandingComponent,
		GithubButtonComponent,
		NotificationComponent,
		SidebarComponent,
		UserPanelComponent,
		SidebarNoticeComponent,
		SidemenuComponent
	],
	imports: [
		SharedModule
	],
	exports: [LayoutComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TemplateModule {

}