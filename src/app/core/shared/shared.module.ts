import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/material.module';
import { MaterialExtensionsModule } from '../../material-extensions.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { NgProgressRouterModule } from 'ngx-progressbar/router';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';

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