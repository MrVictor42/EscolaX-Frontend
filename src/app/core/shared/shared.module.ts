import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';

const MODULES: any[] = [
	MaterialModule,
	RouterModule
];

@NgModule({
	declarations: [],
	imports: [...MODULES],
	exports: [...MODULES]
})
export class SharedModule { }