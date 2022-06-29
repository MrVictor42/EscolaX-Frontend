import { Component } from '@angular/core';

@Component({
	selector: 'app-branding',
	template: `
		<a class="matero-branding" href="/">
			<img src="./assets/images/matero.png" class="matero-branding-logo-expanded" alt="escolax-logo" />
			<span class="matero-branding-name">Escola X</span>
		</a>
  `,
})
export class BrandingComponent {

}