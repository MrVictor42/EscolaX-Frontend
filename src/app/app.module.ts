import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateModule } from './theme/template.module';
import { SharedModule } from './core/shared/shared.module';
import { TokenInterceptor } from './core/authentication/token.interceptor';
import { AuthService } from './core/authentication/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		TemplateModule,
		SharedModule
	],
	providers: [
		AuthService, {
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptor,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }