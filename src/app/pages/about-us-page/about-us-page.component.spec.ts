import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { DotsComponent } from 'src/app/shared/dots/dots.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutUsPageComponent } from './about-us-page.component';

describe('AboutUsPageComponent', () => {
    let component: AboutUsPageComponent;
    let fixture: ComponentFixture<AboutUsPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AboutUsPageComponent],
            imports: [RouterTestingModule, SharedModule, NgbTooltipModule],
        });
        fixture = TestBed.createComponent(AboutUsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display dots', () => {
        const dots = fixture.debugElement.queryAll(By.css('app-dots'));
        expect(dots).toBeTruthy();
        expect(dots.length).toBe(2);

        const dotsComponent: DotsComponent = dots[0]?.componentInstance;
        expect(dotsComponent).toBeTruthy();
        expect(dotsComponent.rectangles).toEqual([{ x: 0, y: 0, width: 12, height: 24 }]);
        expect(dotsComponent.normalColor).toBe('#62e067');
        expect(dotsComponent.intersectionColor).toBe('#555f6733');
    });

    it('should display images', () => {
        const images: NodeListOf<HTMLImageElement> = fixture.nativeElement.querySelectorAll('img');
        expect(images).toBeTruthy();
        expect(images.length).toBe(9);
        expect(images[0]?.src).toContain('hungary-map.svg');
        expect(images[1]?.src).toContain('delta-logo.png');
        expect(images[2]?.src).toContain('durostone-logo.png');
        expect(images[3]?.src).toContain('grh-logo.svg');
        expect(images[4]?.src).toContain('ddc-logo.png');
        expect(images[5]?.src).toContain('mmi-atlas-logo.png');
    });

    it('should display text', () => {
        const h2: HTMLHeadingElement = fixture.nativeElement.querySelector('h2');
        const h3s: NodeListOf<HTMLHeadingElement> = fixture.nativeElement.querySelectorAll('h3');
        const aboutUs: NodeListOf<HTMLDivElement> = fixture.nativeElement.querySelectorAll('.about-us div');
        const references: NodeListOf<HTMLDivElement> = fixture.nativeElement.querySelectorAll('.references div');
        const listTitle: HTMLDivElement = fixture.nativeElement.querySelector('.activities h3 + div');
        const listItems: NodeListOf<HTMLLIElement> = fixture.nativeElement.querySelectorAll('li');
        expect(h2).toBeTruthy();
        expect(h2.textContent).toBe('Rólunk');
        expect(h3s).toBeTruthy();
        expect(h3s.length).toBe(3);
        expect(h3s[0]?.textContent).toBe('Hol és kikkel dolgoztunk eddig?');
        expect(h3s[1]?.textContent).toBe('Tevékenységeink');
        expect(aboutUs).toBeTruthy();
        expect(aboutUs.length).toBe(2);
        expect(aboutUs[0]?.textContent).toContain(
            'A Monotop Iparipadló Építő és Műszaki Fejlesztő Kft. 1995-ben alakult, magyar tulajdonú építőipari vállalkozás. A cég 30 fős saját létszámmal rendelkezik és megalakulása óta végez speciális építőipari tevékenységet.'
        );
        expect(aboutUs[1]?.textContent).toContain(
            'Évente 100.000 - 150.000 m2 ipari padlót, térbetont, aljzatbetont, felbetont készítünk.'
        );
        expect(references.length).toBe(2);
        expect(references[0]?.textContent).toContain(
            'Számos országosan is elismert generálkivitelezőt tudhatunk megrendelőink között.Elvégzett munkáink között szerepelnek az alábbi cégek beruházásai a teljesség igénye nélkül:'
        );
        expect(references[1]?.textContent).toContain(
            'Aréna Pláza • Audi • Axiál • Coca-Cola • Electrolux • Gyermelyi • Lego • Mercedes • Richter Gedeon • Sága • Samsung • Schwarzmüller • Shell • Spar • Stop-Shop • Tesco • West End • És még sokan mások…'
        );
        expect(listTitle).toBeTruthy();
        expect(listTitle.textContent).toBe('Cégünk fő tevékenységei:');
        expect(listItems).toBeTruthy();
        expect(listItems.length).toBe(5);
        expect(listItems[0]?.textContent).toBe('szálerősített nagytáblás, vágott fuga mentes ipari padlók');
        expect(listItems[1]?.textContent).toBe('vágott fugás ipari padlók');
        expect(listItems[2]?.textContent).toBe('térbetonok, beton útburkolatok');
        expect(listItems[3]?.textContent).toBe('felbetonok, alaplemezek, aljzatbetonok');
        expect(listItems[4]?.textContent).toBe('felújítás, állagmegóvás, padlójavítások');
    });

    it('should display a link', () => {
        const link = fixture.debugElement.query(By.css('app-link-button'));
        expect(link).toBeTruthy();
        const linkComponent = link.componentInstance;
        expect(linkComponent).toBeTruthy();
        expect(linkComponent.svgIcon).toBe('arrow-right');
        expect(linkComponent.link).toBe('/tevekenysegek');
        expect(linkComponent.svgIconAlt).toBe('Jobbra mutató nyíl');
        expect(linkComponent.isExternal).toBe(false);
        expect(link.nativeElement).toBeTruthy();
        expect(link.nativeElement.textContent).toContain('Tovább a tevékenységekhez');
    });

    it('should display work together', () => {
        const workTogether = fixture.debugElement.queryAll(By.css('app-work-together'));
        expect(workTogether).toBeTruthy();
    });
});
