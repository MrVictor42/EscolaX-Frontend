import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';

const MaterialComponents = [
	MatToolbarModule,
	MatButtonModule,
	MatSidenavModule,
	FormsModule,
	MatIconModule,
	MatDividerModule,
	MatMenuModule,
	MatListModule
];

@NgModule({
	declarations: [],
	imports: [ MaterialComponents ],
	exports: [ MaterialComponents ]
})
export class MaterialModule { }
