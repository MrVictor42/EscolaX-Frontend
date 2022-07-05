import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { CoreModule } from '../app/core/core.module';
import { TemplateModule } from './theme/template.module';
import { SharedModule } from './core/shared/shared.module';
import { RoutesModule } from './routes/routes.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { appInitializerProviders } from '../app/core/initializers';

import { TokenInterceptor } from './core/authentication/token.interceptor';
import { AuthService } from './core/authentication/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export function TranslateHttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		CoreModule,
		TemplateModule,
		SharedModule,
		RoutesModule,
		NgxPermissionsModule.forRoot(),
		ToastrModule.forRoot(),
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: TranslateHttpLoaderFactory,
				deps: [HttpClient],
			},
		}),
	],
	providers: [
		AuthService, {
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptor,
			multi: true
		},
		appInitializerProviders
	],
	bootstrap: [AppComponent]
})
export class AppModule { }