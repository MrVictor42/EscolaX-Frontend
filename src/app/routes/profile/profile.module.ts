import { NgModule } from '@angular/core';
import { SharedModule } from '../../core/shared';
import { ProfileRoutingModule } from './profile-routing.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ProfileLayoutComponent } from './layout/layout.component';

const COMPONENTS: any[] = [
	ProfileLayoutComponent,
	ResetPasswordComponent
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
	imports: [SharedModule, ProfileRoutingModule],
	declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC]
})

export class ProfileModule {

}