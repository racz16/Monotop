import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RoutingService } from 'src/app/core/services/routing.service';

@Component({
    selector: 'app-activities-page',
    templateUrl: './activities-page.component.html',
    styleUrls: ['./activities-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivitiesPageComponent {
    constructor(rs: RoutingService) {
        rs.setPageTitle('Tevékenységek');
    }
}
