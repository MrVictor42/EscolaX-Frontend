import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@NgModule({
	declarations: [],
	imports: [
		CommonModule
	],
	exports: [
		MatToolbarModule,
		MatButtonModule,
		MatFormFieldModule,
		MatSelectModule,
		FormsModule,
		MatInputModule
	]
})
export class MaterialModule { }
