import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgbCarousel, NgbSlide } from '@ng-bootstrap/ng-bootstrap';
import { RoutingService } from 'src/app/core/services/routing.service';
import { WorkTogetherComponent } from '../../../shared/components/work-together/work-together.component';

@Component({
    selector: 'app-gallery-page',
    templateUrl: './gallery-page.component.html',
    styleUrls: ['./gallery-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgbCarousel, NgbSlide, WorkTogetherComponent],
})
export class GalleryPageComponent {
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1280/720`);

    constructor(rs: RoutingService) {
        rs.setPageTitle('Galéria');
    }
}
