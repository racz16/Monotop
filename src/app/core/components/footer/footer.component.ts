import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RoutingService } from '../../services/routing.service';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [AsyncPipe],
})
export class FooterComponent {
    constructor(public rs: RoutingService) {}
}
