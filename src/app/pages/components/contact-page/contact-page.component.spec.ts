import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPageComponent } from './contact-page.component';

describe('ContactPageComponent', () => {
    let component: ContactPageComponent;
    let fixture: ComponentFixture<ContactPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ContactPageComponent],
        });
        fixture = TestBed.createComponent(ContactPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display general informations', () => {
        const contact: HTMLHeadingElement = fixture.nativeElement.querySelector('h1');
        const monotop: HTMLDivElement = fixture.nativeElement.querySelector('.green-monotop');
        const informations: NodeListOf<HTMLDivElement> = fixture.nativeElement.querySelectorAll('.company-data div');
        expect(contact).toBeTruthy();
        expect(contact.textContent).toBe('Kapcsolat');
        expect(monotop).toBeTruthy();
        expect(monotop.textContent).toBe('MONOTOP Kft.');
        expect(informations).toBeTruthy();
        expect(informations.length).toBe(4);
        expect(informations[0]?.textContent).toBe('1214 Budapest, II. Rákóczi Ferenc út 315.');
        expect(informations[1]?.textContent).toBe('+36 30 947 2080Rácz József');
        expect(informations[2]?.textContent).toBe('info@monotop.hu');
        expect(informations[3]?.textContent).toBe('Adószám: 13817215-2-43');
    });

    it('should display personal contact informations', () => {
        const informations: NodeListOf<HTMLDivElement> = fixture.nativeElement.querySelectorAll('.people-text div');
        const informationLinks: NodeListOf<HTMLAnchorElement> =
            fixture.nativeElement.querySelectorAll('.people-text div a');
        expect(informations).toBeTruthy();
        expect(informations.length).toBe(4);
        expect(informationLinks).toBeTruthy();
        expect(informationLinks.length).toBe(4);
        expect(informations[0]?.textContent).toContain('Irodavezető');
        expect(informations[0]?.textContent).toContain('Valulh Zsuzsanna');
        expect(informationLinks[0]?.textContent).toBe('+36 30 470 0409');
        expect(informationLinks[0]?.href).toBe('tel:+36 30 470 0409');
        expect(informations[1]?.textContent).toContain('Előkészítő ');
        expect(informations[1]?.textContent).toContain('Aradi Márta');
        expect(informationLinks[1]?.textContent).toBe('+36 30 680 2283');
        expect(informationLinks[1]?.href).toBe('tel:+36 30 680 2283');
        expect(informations[2]?.textContent).toContain('Főépítésvezető ');
        expect(informations[2]?.textContent).toContain('Megyesi Zsolt');
        expect(informationLinks[2]?.textContent).toBe('+36 30 203 9224');
        expect(informationLinks[2]?.href).toBe('tel:+36 30 203 9224');
        expect(informations[3]?.textContent).toContain('Építésvezető ');
        expect(informations[3]?.textContent).toContain('Szigeti Zoltán');
        expect(informationLinks[3]?.textContent).toBe('+36 30 314 8496');
        expect(informationLinks[3]?.href).toBe('tel:+36 30 314 8496');
    });

    it('should display the map', () => {
        const map: HTMLIFrameElement = fixture.nativeElement.querySelector('iframe');
        expect(map).toBeTruthy();
        expect(map.src).toContain('google.com/maps/embed/v1');
    });
});
