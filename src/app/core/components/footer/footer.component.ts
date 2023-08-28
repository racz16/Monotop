import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RoutingService } from '../../services/routing.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
    environment = environment;

    constructor(public rs: RoutingService) {}
}
