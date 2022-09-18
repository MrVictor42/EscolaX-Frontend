import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewClassroomComponent } from './new-classroom/new-classroom.component';

const routes: Routes = [
    { path: 'new_classroom', component: NewClassroomComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClassroomRoutingModule { }
