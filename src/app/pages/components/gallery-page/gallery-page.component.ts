import { ChangeDetectionStrategy, Component } from '@angular/core';
import { City } from '../../interfaces/city';

@Component({
    selector: 'app-gallery-page',
    templateUrl: './gallery-page.component.html',
    styleUrls: ['./gallery-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryPageComponent {
    cities: City[] = new Array<City>(11).fill({ name: 'Debrecen', company: 'Coca Cola' });
}
