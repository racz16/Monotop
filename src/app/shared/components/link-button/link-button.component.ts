import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'app-link-button',
    templateUrl: './link-button.component.html',
    styleUrls: ['./link-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgTemplateOutlet, RouterLink],
})
export class LinkButtonComponent {
    @Input() link = '';
    @Input() isExternal = false;
    // related GitHub issue: https://github.com/angular-eslint/angular-eslint/issues/1120#issuecomment-1863327538
    // eslint-disable-next-line @angular-eslint/no-input-rename
    @Input({ transform: (value: string) => `assets/link-button-icons/${value}.svg` }) svgIcon?: string;
}
