import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { EventType, Router } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
    isExtendedFooterVisible = true;

    constructor(private router: Router, private cd: ChangeDetectorRef) {
        this.router.events.subscribe((event) => {
            if (event.type === EventType.NavigationEnd) {
                this.isExtendedFooterVisible = !event.url.includes('kapcsolat');
                this.cd.markForCheck();
            }
        });
    }
}
