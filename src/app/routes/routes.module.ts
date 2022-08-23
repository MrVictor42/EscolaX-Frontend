import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RoutesRoutingModule } from './routes-routing.module';

import { LoginComponent } from './sessions/login/login.component';
import { HomeComponent } from './home/home.component';
import { Error403Component } from '../routes/sessions/403.component';
import { Error404Component } from '../routes/sessions/404.component';
import { Error500Component } from '../routes/sessions/500.component';
import { ResetPasswordComponent } from './sessions/reset-password/reset-password.component';

const COMPONENTS: any[] = [
    LoginComponent,
    HomeComponent,
    Error403Component,
    Error404Component,
    Error500Component,
    ResetPasswordComponent
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
    imports: [SharedModule, RoutesRoutingModule],
    declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})

export class RoutesModule {

}
