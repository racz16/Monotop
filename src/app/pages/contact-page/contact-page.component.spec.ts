import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPageComponent } from './contact-page.component';

describe('ContactPageComponent', () => {
    let component: ContactPageComponent;
    let fixture: ComponentFixture<ContactPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ContactPageComponent],
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
        const informations: NodeListOf<HTMLDivElement> = fixture.nativeElement.querySelectorAll('address div');
        expect(contact).toBeTruthy();
        expect(contact.textContent).toBe('Kapcsolat');
        expect(monotop).toBeTruthy();
        expect(monotop.textContent).toBe('MONOTOP Kft.');
        expect(informations).toBeTruthy();
        expect(informations.length).toBe(4);
        expect(informations[0]?.textContent).toBe('1214 Budapest, II. Rákóczi Ferenc út 315.');
        expect(informations[1]?.textContent).toBe('+36 1 2000 380');
        expect(informations[2]?.textContent).toBe('info@monotop.hu');
        expect(informations[3]?.textContent).toBe('Adószám: 12134524-1-66');
    });

    it('should display personal contact informations', () => {
        const title: HTMLDivElement = fixture.nativeElement.querySelector('.people-title');
        const informations: NodeListOf<HTMLDivElement> = fixture.nativeElement.querySelectorAll('.people-text div');
        const informationLinks: NodeListOf<HTMLAnchorElement> =
            fixture.nativeElement.querySelectorAll('.people-text div a');
        expect(title).toBeTruthy();
        expect(title.textContent).toBe('Érdeklődés');
        expect(informations).toBeTruthy();
        expect(informations.length).toBe(4);
        expect(informationLinks).toBeTruthy();
        expect(informationLinks.length).toBe(4);
        expect(informations[0]?.textContent).toContain('Irodavezető');
        expect(informations[0]?.textContent).toContain('Aradi Márta');
        expect(informationLinks[0]?.textContent).toBe('+36 1 1234 5678');
        expect(informationLinks[0]?.href).toBe('tel:+36 1 1234 5678');
        expect(informations[1]?.textContent).toContain('Előkészítő ');
        expect(informations[1]?.textContent).toContain('Vaulm Zsuzsanna');
        expect(informationLinks[1]?.textContent).toBe('+36 1 1234 5678');
        expect(informationLinks[1]?.href).toBe('tel:+36 1 1234 5678');
        expect(informations[2]?.textContent).toContain('Főépítésvezető ');
        expect(informations[2]?.textContent).toContain('Megyesi Zsolt');
        expect(informationLinks[2]?.textContent).toBe('+36 1 1234 5678');
        expect(informationLinks[2]?.href).toBe('tel:+36 1 1234 5678');
        expect(informations[3]?.textContent).toContain('Építésvezető ');
        expect(informations[3]?.textContent).toContain('Szigeti Zoltán');
        expect(informationLinks[3]?.textContent).toBe('+36 1 1234 5678');
        expect(informationLinks[3]?.href).toBe('tel:+36 1 1234 5678');
    });

    it('should display the map', () => {
        const map: HTMLIFrameElement = fixture.nativeElement.querySelector('iframe');
        expect(map).toBeTruthy();
        expect(map.src).toContain('google.com/maps/embed/v1');
    });
});
