import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileOverviewComponent } from './overview/overview.component';

const routes: Routes = [
    { path: 'overview', component: ProfileOverviewComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProfileRoutingModule {

}
