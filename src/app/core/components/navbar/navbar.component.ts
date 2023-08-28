import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from 'src/environments/environment';
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
            path: environment.configuration === 'production' ? undefined : 'referenciak',
        },
        {
            name: 'Galéria',
            path: environment.configuration === 'production' ? undefined : 'galeria',
        },
        {
            name: 'Kapcsolat',
            path: 'kapcsolat',
        },
    ];

    constructor(public rs: RoutingService) {}
}
