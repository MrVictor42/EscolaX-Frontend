import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileOverviewComponent } from './overview/overview.component';
import { ProfileResetPasswordComponent } from './reset-password/reset-password.component';
import { ProfileInformationsComponent } from './informations/informations.component';
import { ProfileEditComponent } from './edit/edit-profile.component';
import { PhotoEditComponent } from './photo-edit/photo-edit.component';

const COMPONENTS: any[] = [
	ProfileOverviewComponent,
	ProfileResetPasswordComponent,
	ProfileInformationsComponent,
	ProfileEditComponent,
    PhotoEditComponent
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
	imports: [SharedModule, ProfileRoutingModule],
	declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC]
})

export class ProfileModule {

}
