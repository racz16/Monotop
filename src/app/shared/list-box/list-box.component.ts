import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-list-box',
    templateUrl: './list-box.component.html',
    styleUrls: ['./list-box.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListBoxComponent {
    @Input() headerTitle = '';
    @Input() headerBackgroundImagePath = '';

    get backgroundPath(): string {
        return `linear-gradient(0deg, rgba(0 0 0 / 70%) 0%, transparent 50%), url(assets/${this.headerBackgroundImagePath})`;
    }
}
