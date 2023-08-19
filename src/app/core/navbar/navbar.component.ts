import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item';
import { RoutingService } from '../services/routing.service';

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

    constructor(public rs: RoutingService) {}
}
