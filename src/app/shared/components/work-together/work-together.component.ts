import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Rectangle } from '../../interfaces/rectangle';

@Component({
    selector: 'app-work-together',
    templateUrl: './work-together.component.html',
    styleUrls: ['./work-together.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkTogetherComponent {
    rectangles: Rectangle[] = [
        { x: 0, y: 0, width: 12, height: 8 },
        { x: 7, y: 5, width: 12, height: 8 },
    ];
}
