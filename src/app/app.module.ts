import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './template/header/header.component';
import { LayoutComponent } from './template/layout/layout.component';
import { SidenavComponent } from './template/sidenav/sidenav.component';

@NgModule({
	declarations: [
		AppComponent,
		LayoutComponent,
		SidenavComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
