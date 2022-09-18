import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ClassroomRoutingModule } from './classroom-routing.module';
import { NewClassroomComponent } from './new-classroom/new-classroom.component';

const COMPONENTS: any[] = [
    NewClassroomComponent,
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
	imports: [SharedModule, ClassroomRoutingModule],
	declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC]
})
export class ClassroomModule { }
