import { Injectable } from '@angular/core';
import { EventType, NavigationEnd, Router } from '@angular/router';
import { Observable, filter, map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RoutingService {
    isContactPageOpened$: Observable<boolean>;
    currentUrl$: Observable<string>;

    constructor(private router: Router) {
        const navigationEnd$ = this.router.events.pipe(
            filter((e) => e.type === EventType.NavigationEnd),
            map((e) => e as NavigationEnd)
        );
        this.isContactPageOpened$ = navigationEnd$.pipe(map((e) => e.url.includes('kapcsolat')));
        this.currentUrl$ = navigationEnd$.pipe(map((e) => this.getUrlWithoutFragment(e.url)));
    }

    private getUrlWithoutFragment(url: string): string {
        const hashmarkIndex = url.indexOf('#');
        if (hashmarkIndex === -1) {
            return url;
        } else {
            return url.substring(0, hashmarkIndex);
        }
    }
}
