import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Rectangle } from 'src/app/shared/interfaces/rectangle';
import { City } from '../interfaces/city';

@Component({
    selector: 'app-about-us-page',
    templateUrl: './about-us-page.component.html',
    styleUrls: ['./about-us-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsPageComponent {
    rectangle: Rectangle[] = [{ x: 0, y: 0, width: 12, height: 24 }];
    cities: City[] = new Array<City>(11).fill({ name: 'Debrecen', company: 'Coca Cola' });
}
