import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/material.module';

const MODULES: any[] = [
	MaterialModule,
	BrowserModule,
	CommonModule,
	RouterModule,
	ReactiveFormsModule,
	FormsModule,
	DragDropModule,
	MaterialExtensionsModule,
	FlexLayoutModule,
	FormlyModule,
	FormlyMaterialModule,
	NgProgressModule,
	NgProgressRouterModule,
	NgProgressHttpModule,
	NgxPermissionsModule,
	ToastrModule,
	TranslateModule
];

@NgModule({
	declarations: [],
	imports: [...MODULES],
	exports: [...MODULES]
})
export class SharedModule { }