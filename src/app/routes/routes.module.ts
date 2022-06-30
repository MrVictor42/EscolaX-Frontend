import { NgModule } from '@angular/core';
import { SharedModule } from '../core/shared';
import { RoutesRoutingModule } from './routes-routing.module';

import { LoginComponent } from './session/login/login.component';

const COMPONENTS: any[] = [
	LoginComponent,
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
	imports: [SharedModule, RoutesRoutingModule],
	declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})
export class RoutesModule { }