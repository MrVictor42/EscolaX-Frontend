import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../../core/bootstrap/menu.service';

@Component({
    selector: 'breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class BreadcrumbComponent implements OnInit {
    @Input() nav: string[] = [];
    private listRoutes: string[] = [];

    constructor(private router: Router, private menu: MenuService) { }

    ngOnInit() {
        this.nav = Array.isArray(this.nav) ? this.nav : [];

        if (this.nav.length === 0) {
            this.genBreadcrumb();
        }
    }

    trackByNavlink(index: number, navlink: string): string {
        return navlink;
    }

    genBreadcrumb() {
        const routes = this.router.url.slice(1).split('/');
        routes.forEach(item => {
            if (item.toString().includes('_')) {
                item = item.toString().replace('_', ' ')
                this.listRoutes.push(item);
            } else {
                this.listRoutes.push(item);
            }
        })
        this.nav = this.listRoutes;
        this.nav.unshift('home');
    }
}
