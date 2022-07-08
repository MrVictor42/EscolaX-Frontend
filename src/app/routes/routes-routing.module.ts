import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { environment } from '../../environments/environment';
import { AuthGuard } from '../core/authentication/auth.guard';
import { AdminLayoutComponent } from '../theme/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from '../theme/auth-layout/auth-layout.component';
import { HomeComponent } from './home/home.component';
import { ResetPasswordComponent } from './profile/reset-password/reset-password.component';
import { LoginComponent } from './session/login/login.component';

const routes: Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            {
                path: 'profile',
                loadChildren: () => import('./profile/profile.module').then(module => module.ProfileModule)
            }
        ]
    },
    {
        path: 'auth',
        component: AuthLayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'reset-password', component: ResetPasswordComponent }
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
    ],
    exports: [RouterModule],
})

export class RoutesRoutingModule { }