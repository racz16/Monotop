import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RoutingService } from '../../services/routing.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
    constructor(public rs: RoutingService) {}
}
