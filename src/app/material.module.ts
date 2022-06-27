import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

const MaterialComponents = [
	MatToolbarModule,
	MatButtonModule,
	MatSidenavModule,
	FormsModule,
	MatIconModule,
	MatDividerModule
];

@NgModule({
	declarations: [],
	imports: [ MaterialComponents ],
	exports: [ MaterialComponents ]
})
export class MaterialModule { }
