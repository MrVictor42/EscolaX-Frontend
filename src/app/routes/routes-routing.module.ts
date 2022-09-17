import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { environment } from '../../environments/environment';
import { AuthGuard } from '../core/authentication/auth.guard';
import { AdminLayoutComponent } from '../theme/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from '../theme/auth-layout/auth-layout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './sessions/login/login.component';
import { ResetPasswordComponent } from './sessions/reset-password/reset-password.component';

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
            },
            {
                path: 'student',
                loadChildren: () => import('./students/student.module').then(module => module.StudentModule)
            },
            {
                path: 'classroom',
                loadChildren: () => import('./classroom/classroom.module').then(module => module.ClassroomModule)
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
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: environment.useHash,
            relativeLinkResolution: 'legacy'
        }),
    ],
    exports: [RouterModule],
})

export class RoutesRoutingModule { }
