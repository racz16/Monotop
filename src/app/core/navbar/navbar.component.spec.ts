import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NavbarComponent],
            imports: [NgbCollapseModule, RouterTestingModule],
        });
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display the logo and the company name', () => {
        const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
        const span: HTMLSpanElement = fixture.nativeElement.querySelector('span');
        expect(img).toBeTruthy();
        expect(img.src).toContain('monotop_logo.svg');
        expect(img.alt).toContain('Monotop Kft. logó');
        expect(span).toBeTruthy();
        expect(span.textContent).toBe('MONOTOP Kft.');
    });

    it('should display the menu items', () => {
        const lis: NodeListOf<HTMLAnchorElement> = fixture.nativeElement.querySelectorAll('li a');
        expect(lis.length).toBe(6);
        expect(lis[0]?.textContent).toContain('Főoldal');
        expect(lis[0]?.href).toContain('fooldal');
        expect(lis[1]?.textContent).toContain('Rólunk');
        expect(lis[1]?.href).toContain('rolunk');
        expect(lis[2]?.textContent).toContain('Tevékenységek');
        expect(lis[2]?.href).toContain('tevekenysegek');
        expect(lis[3]?.textContent).toContain('Referenciák');
        expect(lis[3]?.href).toContain('referenciak');
        expect(lis[4]?.textContent).toContain('Galéria');
        expect(lis[4]?.href).toContain('galeria');
        expect(lis[5]?.textContent).toContain('Kapcsolat');
        expect(lis[5]?.href).toContain('kapcsolat');
    });

    it('should open and close the menu', () => {
        expect(component.isMenuCollapsed).toBeTrue();

        const toggleButton: HTMLButtonElement = fixture.nativeElement.querySelector('button');
        toggleButton.click();
        fixture.detectChanges();
        expect(component.isMenuCollapsed).toBeFalse();

        toggleButton.click();
        fixture.detectChanges();
        expect(component.isMenuCollapsed).toBeTrue();
    });
});
