import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-activities-page',
    templateUrl: './activities-page.component.html',
    styleUrls: ['./activities-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivitiesPageComponent {}
