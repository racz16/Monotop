import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-link-button',
    templateUrl: './link-button.component.html',
    styleUrls: ['./link-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkButtonComponent {
    @Input() link = '';
    @Input() isExternal = false;
    @Input() svgIcon?: string;
    @Input() svgIconAlt?: string;

    get iconSrc(): string {
        return `/assets/link-button-icons/${this.svgIcon}.svg`;
    }
}
