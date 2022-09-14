import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { NewStudentComponent } from './new-student/new-student.component';
import { StudentRoutingModule } from './student-routing.module';
import { LayoutComponent } from './layout/layout.component';

const COMPONENTS: any[] = [
    NewStudentComponent,
    LayoutComponent
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
	imports: [SharedModule, StudentRoutingModule],
	declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC]
})

export class StudentModule {

}
