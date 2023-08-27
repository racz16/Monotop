import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-gallery-page',
    templateUrl: './gallery-page.component.html',
    styleUrls: ['./gallery-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryPageComponent {
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1280/720`);
}
