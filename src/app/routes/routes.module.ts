import { NgModule } from '@angular/core';
import { SharedModule } from '../core/shared';
import { RoutesRoutingModule } from './routes-routing.module';

import { LoginComponent } from './session/login/login.component';
import { HomeComponent } from './home/home.component';

const COMPONENTS: any[] = [
	LoginComponent,
	HomeComponent
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
	imports: [SharedModule, RoutesRoutingModule],
	declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})

export class RoutesModule {

}