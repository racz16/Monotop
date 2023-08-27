import { TestBed } from '@angular/core/testing';

import { NavigationEnd, Router } from '@angular/router';
import { Subject, first } from 'rxjs';
import { RoutingService } from './routing.service';

describe('RoutingService', () => {
    let service: RoutingService;
    const navigationEventSubject = new Subject<NavigationEnd>();
    const mockRouter = {
        events: navigationEventSubject.asObservable(),
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: Router, useValue: mockRouter }],
        });
        service = TestBed.inject(RoutingService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should handle if the current url is the root', () => {
        service.currentUrl$.pipe(first()).subscribe((url) => {
            expect(url).toBe('/');
        });
        navigationEventSubject.next(new NavigationEnd(1, '/', '/'));
    });

    it('should handle an average current url', () => {
        service.currentUrl$.pipe(first()).subscribe((url) => {
            expect(url).toBe('/kapcsolat');
        });
        navigationEventSubject.next(new NavigationEnd(1, '/kapcsolat', '/kapcsolat'));
    });

    it('should handle the current url with fragment', () => {
        service.currentUrl$.pipe(first()).subscribe((url) => {
            expect(url).toBe('/kapcsolat');
        });
        navigationEventSubject.next(new NavigationEnd(1, '/kapcsolat#main-content', '/kapcsolat#main-content'));
    });

    it('should not recognize the main page as the contac page', () => {
        service.isContactPageOpened$.pipe(first()).subscribe((isContactPage) => {
            expect(isContactPage).toBe(false);
        });
        navigationEventSubject.next(new NavigationEnd(1, '/', '/'));
    });

    it('should not recognize the about us page as the contac page', () => {
        service.isContactPageOpened$.pipe(first()).subscribe((isContactPage) => {
            expect(isContactPage).toBe(false);
        });
        navigationEventSubject.next(new NavigationEnd(1, '/rolun', '/rolunk'));
    });

    it('should recognize the contact page', () => {
        service.isContactPageOpened$.pipe(first()).subscribe((isContactPage) => {
            expect(isContactPage).toBe(true);
        });
        navigationEventSubject.next(new NavigationEnd(1, '/kapcsolat', '/kapcsolat'));
    });

    it('should set the page title', () => {
        service.setPageTitle('Teszt');
        expect(document.title).toBe('Monotop Kft. | Teszt');
    });
});
