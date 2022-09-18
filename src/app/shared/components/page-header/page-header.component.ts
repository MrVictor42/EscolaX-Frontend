import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { MenuService } from '../../../core/bootstrap/menu.service';
import { Router } from '@angular/router';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
    selector: 'page-header',
    host: {
        class: 'matero-page-header',
    },
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PageHeaderComponent implements OnInit {
    @Input() title = '';
    @Input() url = '';
    @Input() nav: string[] = [];
    @Input()
    get hideBreadcrumb() {
        return this._hideBreadCrumb;
    }
    set hideBreadcrumb(value: boolean) {
        this._hideBreadCrumb = coerceBooleanProperty(value);
    }
    private _hideBreadCrumb = false;

    constructor(private router: Router, private menu: MenuService) { }

    ngOnInit() {
        this.nav = Array.isArray(this.nav) ? this.nav : [];
        this.title = this.title || this.nav[this.nav.length - 1];
    }

    static ngAcceptInputType_hideBreadcrumb: BooleanInput;
}
