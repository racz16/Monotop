import { ChangeDetectionStrategy, Component } from '@angular/core';
import { City } from '../../interfaces/city';

@Component({
    selector: 'app-references-page',
    templateUrl: './references-page.component.html',
    styleUrls: ['./references-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferencesPageComponent {
    cities: City[] = new Array<City>(11).fill({ name: 'Debrecen', company: 'Coca Cola' });
}
