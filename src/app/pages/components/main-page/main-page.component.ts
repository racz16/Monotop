import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RoutingService } from 'src/app/core/services/routing.service';
import { Rectangle } from 'src/app/shared/interfaces/rectangle';
import { WorkTogetherComponent } from '../../../shared/components/work-together/work-together.component';
import { DotsComponent } from '../../../shared/components/dots/dots.component';
import { LinkButtonComponent } from '../../../shared/components/link-button/link-button.component';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [LinkButtonComponent, DotsComponent, WorkTogetherComponent],
})
export class MainPageComponent {
    rectangle: Rectangle[] = [{ x: 0, y: 0, width: 12, height: 6 }];
    yearsSinceFoundation = (new Date().getFullYear() - 1994).toString();

    constructor(rs: RoutingService) {
        rs.setPageTitle('Főoldal');
    }
}
