import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item';
import { RoutingService } from '../../services/routing.service';

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
        },
        {
            name: 'Galéria',
        },
        {
            name: 'Kapcsolat',
            path: 'kapcsolat',
        },
    ];

    constructor(public rs: RoutingService) {}
}
