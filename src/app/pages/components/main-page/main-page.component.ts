import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RoutingService } from 'src/app/core/services/routing.service';
import { Rectangle } from 'src/app/shared/interfaces/rectangle';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {
    rectangle: Rectangle[] = [{ x: 0, y: 0, width: 12, height: 6 }];
    yearsSinceFoundation = (new Date().getFullYear() - 1995).toString();

    constructor(rs: RoutingService) {
        rs.setPageTitle('Főoldal');
    }
}
