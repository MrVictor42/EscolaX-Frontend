import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { GangRoutingModule } from './gang-routing.module';
import { NewGangComponent } from './new-gang/new-gang.component';

const COMPONENTS: any[] = [
    NewGangComponent
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
	imports: [SharedModule, GangRoutingModule],
	declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC]
})
export class GangModule { }
