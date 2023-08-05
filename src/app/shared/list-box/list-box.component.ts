import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-list-box',
    templateUrl: './list-box.component.html',
    styleUrls: ['./list-box.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListBoxComponent {}
