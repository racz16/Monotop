import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { RoutingService } from 'src/app/core/services/routing.service';
import { WorkTogetherComponent } from '../../../shared/components/work-together/work-together.component';
import { City } from '../../interfaces/city';

@Component({
    selector: 'app-references-page',
    templateUrl: './references-page.component.html',
    styleUrls: ['./references-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgbTooltip, WorkTogetherComponent],
})
export class ReferencesPageComponent {
    cities: City[] = new Array<City>(11).fill({ name: 'Debrecen', company: 'Coca Cola' });

    constructor(rs: RoutingService) {
        rs.setPageTitle('Referenciák');
    }
}
