import { NgModule } from '@angular/core';
import { SharedModule } from '../core/shared';
import { RoutesRoutingModule } from './routes-routing.module';

import { LoginComponent } from './session/login/login.component';
import { HomeComponent } from './home/home.component';
import { AlertComponent } from '../theme/alert/alert.component';

const COMPONENTS: any[] = [
	LoginComponent,
	HomeComponent,
	AlertComponent
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
	imports: [SharedModule, RoutesRoutingModule],
	declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})

export class RoutesModule {

}