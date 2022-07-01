import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { AuthGuard } from '../core/authentication/auth.guard';
import { AdminLayoutComponent } from '../theme/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from '../theme/auth-layout/auth-layout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './session/login/login.component';

const routes: Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent }
        ]
    },
    {
        path: 'auth',
        component: AuthLayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
        ]
    },
    { path: '**', redirectTo: 'home' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: environment.useHash,
            relativeLinkResolution: 'legacy',
        }),
        HttpClientModule
    ],
    exports: [RouterModule],
})

export class RoutesRoutingModule { }