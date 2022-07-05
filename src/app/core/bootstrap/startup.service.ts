import { Injectable } from '@angular/core';
import { switchMap, tap } from 'rxjs/operators';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';
import { AuthService, User } from '../authentication';
import { Menu, MenuService } from './menu.service';

@Injectable({
	providedIn: 'root',
})
export class StartupService {
	constructor(
		private authService: AuthService,
		private menuService: MenuService,
		private permissonsService: NgxPermissionsService,
		private rolesService: NgxRolesService
	) { }

	load() {

	}

	private setMenu(menu: Menu[]) {
		this.menuService.addNamespace(menu, 'menu');
		this.menuService.set(menu);
	}

	private setPermissions(user: User) {
		const permissions = ['canAdd', 'canDelete', 'canEdit', 'canRead'];
		this.permissonsService.loadPermissions(permissions);
		this.rolesService.flushRoles();
		this.rolesService.addRoles({ ADMIN: permissions });
	}
}