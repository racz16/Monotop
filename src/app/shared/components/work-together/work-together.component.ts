import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Rectangle } from '../../interfaces/rectangle';
import { DotsComponent } from '../dots/dots.component';
import { LinkButtonComponent } from '../link-button/link-button.component';

@Component({
    selector: 'app-work-together',
    templateUrl: './work-together.component.html',
    styleUrls: ['./work-together.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [LinkButtonComponent, DotsComponent],
})
export class WorkTogetherComponent {
    rectangles: Rectangle[] = [
        { x: 0, y: 0, width: 12, height: 8 },
        { x: 7, y: 5, width: 12, height: 8 },
    ];
}
