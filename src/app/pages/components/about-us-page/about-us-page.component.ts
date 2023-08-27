import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RoutingService } from 'src/app/core/services/routing.service';

@Component({
    selector: 'app-about-us-page',
    templateUrl: './about-us-page.component.html',
    styleUrls: ['./about-us-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsPageComponent {
    constructor(rs: RoutingService) {
        rs.setPageTitle('Rólunk');
    }
}
