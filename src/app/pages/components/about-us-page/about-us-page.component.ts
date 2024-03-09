import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RoutingService } from 'src/app/core/services/routing.service';
import { WorkTogetherComponent } from '../../../shared/components/work-together/work-together.component';
import { LinkButtonComponent } from '../../../shared/components/link-button/link-button.component';

@Component({
    selector: 'app-about-us-page',
    templateUrl: './about-us-page.component.html',
    styleUrls: ['./about-us-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [LinkButtonComponent, WorkTogetherComponent],
})
export class AboutUsPageComponent {
    constructor(rs: RoutingService) {
        rs.setPageTitle('Rólunk');
    }
}
