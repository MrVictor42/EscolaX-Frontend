import { NgModule } from '@angular/core';
import { SharedModule } from '../../core/shared';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileLayoutComponent } from './layout/layout.component';
import { ProfileOverviewComponent } from './overview/overview.component';
import { ProfileResetPasswordComponent } from './reset-password/reset-password.component';
import { ProfileInformationsComponent } from './informations/informations.component';
import { ProfileEditComponent } from './edit/edit-profile.component';

const COMPONENTS: any[] = [
	ProfileLayoutComponent,
	ProfileOverviewComponent,
	ProfileResetPasswordComponent,
	ProfileInformationsComponent,
	ProfileEditComponent
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
	imports: [SharedModule, ProfileRoutingModule],
	declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC]
})

export class ProfileModule {

}