import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { EventType, Router } from '@angular/router';
import { MenuItem } from '../interfaces/menu-item';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
    isMenuCollapsed = true;
    menuItems: MenuItem[] = [
        {
            name: 'Főoldal',
            path: '',
        },
        {
            name: 'Rólunk',
            path: 'rolunk',
        },
        {
            name: 'Tevékenységek',
            path: 'tevekenysegek',
        },
        {
            name: 'Referenciák',
            path: 'referenciak',
        },
        {
            name: 'Galéria',
            path: 'galeria',
        },
        {
            name: 'Kapcsolat',
            path: 'kapcsolat',
        },
    ];
    currentUrl = '';

    constructor(private router: Router, private cd: ChangeDetectorRef) {
        this.router.events.subscribe((event) => {
            if (event.type === EventType.NavigationEnd && !event.url.endsWith('#main-content')) {
                this.currentUrl = event.url ?? '';
                this.cd.markForCheck();
            }
        });
    }
}
