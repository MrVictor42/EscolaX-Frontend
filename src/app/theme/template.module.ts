import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedModule } from '../core/shared/shared.module';
import { HeaderComponent } from '../theme/header/header.component';
import { BrandingComponent } from '../theme/widgets/branding.component';
import { GithubButtonComponent } from './widgets/github.component';
import { NotificationComponent } from './widgets/notification.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserPanelComponent } from './sidebar/user-panel.component';
import { SidebarNoticeComponent } from './sidebar-notice/sidebar-notice.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AccordionDirective } from './sidemenu/accordion.directive';
import { AccordionItemDirective } from './sidemenu/accordionItem.directive';
import { AccordionAnchorDirective } from './sidemenu/accordionanchor.directive';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { CustomizerComponent } from './customizer/customizer.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { TopmenuPanelComponent } from './topmenu/topmenu-panel.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
	declarations: [
		HeaderComponent,
		BrandingComponent,
		GithubButtonComponent,
		NotificationComponent,
		SidebarComponent,
		UserPanelComponent,
		SidebarNoticeComponent,
		SidemenuComponent,
		AccordionDirective,
		AccordionItemDirective,
		AccordionAnchorDirective,
		AdminLayoutComponent,
		AuthLayoutComponent,
		CustomizerComponent,
		TopmenuComponent,
		TopmenuPanelComponent,
		ResetPasswordComponent
	],
	imports: [SharedModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class TemplateModule {

}