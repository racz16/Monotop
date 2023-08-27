import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-references-page',
    templateUrl: './references-page.component.html',
    styleUrls: ['./references-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferencesPageComponent {}
