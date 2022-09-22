import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewTeacherComponent } from './new-teacher/new-teacher.component';

const routes: Routes = [
    { path: 'new_teacher', component: NewTeacherComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeacherRoutingModule { }
