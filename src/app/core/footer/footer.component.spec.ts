import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationEnd, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject } from 'rxjs';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;
    const sub = new Subject<NavigationEnd>();
    const mockRouter = {
        events: sub.asObservable(),
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FooterComponent],
            imports: [RouterTestingModule.withRoutes([])],
            providers: [{ provide: Router, useValue: mockRouter }],
        });
        fixture = TestBed.createComponent(FooterComponent);
        TestBed.inject(Router);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display the company name and the contact informations', () => {
        const companyName: HTMLDivElement = fixture.nativeElement.querySelector('.footer-monotop');
        expect(companyName).toBeTruthy();
        expect(companyName.textContent).toBe('Monotop Kft.');

        const contactInfos: NodeListOf<HTMLDivElement> = fixture.nativeElement.querySelectorAll('address div');
        expect(contactInfos.length).toBe(4);
        expect(contactInfos[0]?.textContent).toBe('1214 Budapest, II. Rákóczi Ferenc út 315.');
        expect(contactInfos[1]?.textContent).toBe('+36 1 2000 380');
        expect(contactInfos[2]?.textContent).toBe('info@monotop.hu');
        expect(contactInfos[3]?.textContent).toBe('Adószám: 12134524-1-66');
    });

    it('should display interactable phone number and email address', () => {
        const interactableInfos: NodeListOf<HTMLAnchorElement> = fixture.nativeElement.querySelectorAll('a');
        expect(interactableInfos.length).toBe(2);
        expect(interactableInfos[0]?.textContent).toBe('+36 1 2000 380');
        expect(interactableInfos[0]?.href).toBe('tel:+36 1 2000 380');
        expect(interactableInfos[1]?.textContent).toBe('info@monotop.hu');
        expect(interactableInfos[1]?.href).toBe('mailto:info@monotop.hu');
    });

    it('should display the map', () => {
        const map: HTMLIFrameElement = fixture.nativeElement.querySelector('iframe');
        expect(map).toBeTruthy();
        expect(map.src).toContain('google.com/maps/embed/v1');
    });

    it("shouldn't display the extended footer on the contact page", () => {
        let footerExtended: HTMLDivElement = fixture.nativeElement.querySelector('.footer-extended');
        expect(footerExtended).toBeTruthy();

        sub.next(new NavigationEnd(1, '/kapcsolat', '/kapcsolat'));
        fixture.detectChanges();
        footerExtended = fixture.nativeElement.querySelector('.footer-extended');
        expect(footerExtended).toBeFalsy();

        sub.next(new NavigationEnd(2, '/', '/'));
        fixture.detectChanges();
        footerExtended = fixture.nativeElement.querySelector('.footer-extended');
        expect(footerExtended).toBeTruthy();
    });

    it('should display all rights reserved', () => {
        const div: HTMLDivElement = fixture.nativeElement.querySelector('.footer-basic div');
        expect(div).toBeTruthy();
        expect(div.textContent).toBe('Monotop Kft. © Minden jog fenntartva');
    });
});
