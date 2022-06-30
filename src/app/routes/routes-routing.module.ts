import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../../environments/environment';
import { AdminLayoutComponent } from '../theme/admin-layout/admin-layout.component';

const routes: Routes = [
    {
        path:'',
        component: AdminLayoutComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: environment.useHash,
            relativeLinkResolution: 'legacy',
        }),
    ],
    exports: [RouterModule],
})

export class RoutesRoutingModule { }