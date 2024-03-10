import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RoutingService } from 'src/app/core/services/routing.service';
import { ListBoxComponent } from '../../../shared/components/list-box/list-box.component';
import { WorkTogetherComponent } from '../../../shared/components/work-together/work-together.component';

@Component({
    selector: 'app-activities-page',
    templateUrl: './activities-page.component.html',
    styleUrls: ['./activities-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [ListBoxComponent, WorkTogetherComponent],
})
export class ActivitiesPageComponent {
    constructor(rs: RoutingService) {
        rs.setPageTitle('Tevékenységek');
    }
}
