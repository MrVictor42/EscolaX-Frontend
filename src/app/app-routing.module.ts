import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesRoutingModule } from './routes/routes-routing.module';

const routes: Routes = [];

@NgModule({
	imports: [RouterModule.forRoot(routes), RoutesRoutingModule],
	exports: [RouterModule]
})
export class AppRoutingModule { }