import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutUsPageComponent } from './about-us-page.component';

describe('AboutUsPageComponent', () => {
    let component: AboutUsPageComponent;
    let fixture: ComponentFixture<AboutUsPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AboutUsPageComponent],
            imports: [RouterTestingModule, SharedModule],
        });
        fixture = TestBed.createComponent(AboutUsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display the logos', () => {
        const images: NodeListOf<HTMLImageElement> = fixture.nativeElement.querySelectorAll('.logos img');
        expect(images).toBeTruthy();
        expect(images.length).toBe(10);
        expect(images[0]?.src).toContain('delta-logo.jpg');
        expect(images[1]?.src).toContain('durostone-logo.jpg');
        expect(images[2]?.src).toContain('grh-logo.svg');
        expect(images[3]?.src).toContain('ddc-logo.jpg');
        expect(images[4]?.src).toContain('mmi-atlas-logo.jpg');
    });

    it('should display text', () => {
        const h1: HTMLHeadingElement = fixture.nativeElement.querySelector('h1');
        const h2s: NodeListOf<HTMLHeadingElement> = fixture.nativeElement.querySelectorAll('h2');
        const aboutUs: NodeListOf<HTMLParagraphElement> = fixture.nativeElement.querySelectorAll('.about-us p');
        const referencesText: HTMLParagraphElement = fixture.nativeElement.querySelector('.references p');
        const references: NodeListOf<HTMLLIElement> = fixture.nativeElement.querySelectorAll('.references li');
        const listTitle: HTMLDivElement = fixture.nativeElement.querySelector('.activities h2 + div');
        const listItems: NodeListOf<HTMLLIElement> = fixture.nativeElement.querySelectorAll('.activities li');
        expect(h1).toBeTruthy();
        expect(h1.textContent).toBe('Rólunk');
        expect(h2s).toBeTruthy();
        expect(h2s.length).toBe(3);
        expect(h2s[0]?.textContent).toBe('Hol és kikkel dolgoztunk eddig?');
        expect(h2s[1]?.textContent).toBe('Tevékenységeink');
        expect(aboutUs).toBeTruthy();
        expect(aboutUs.length).toBe(2);
        expect(aboutUs[0]?.textContent).toContain(
            'A Monotop Iparipadló Építő és Műszaki Fejlesztő Kft. 1995-ben alakult, magyar tulajdonú építőipari vállalkozás. A cég 30 fős saját létszámmal rendelkezik és megalakulása óta végez speciális építőipari tevékenységet.'
        );
        expect(aboutUs[1]?.textContent).toContain(
            'Évente 100.000 - 150.000 m² ipari padlót, térbetont, aljzatbetont, felbetont készítünk.'
        );
        expect(referencesText).toBeTruthy();
        expect(referencesText.textContent).toContain(
            'Számos országosan is elismert generálkivitelezőt tudhatunk megrendelőink között. Elvégzett munkáink között szerepelnek az alábbi cégek beruházásai a teljesség igénye nélkül:'
        );
        expect(references.length).toBe(18);
        expect(references[0]?.textContent).toBe('Aréna Pláza');
        expect(references[1]?.textContent).toBe('Audi');
        expect(references[2]?.textContent).toBe('Axiál');
        expect(references[3]?.textContent).toBe('Coca-Cola');
        expect(references[4]?.textContent).toBe('Electrolux');
        expect(references[5]?.textContent).toBe('Gyermelyi');
        expect(references[6]?.textContent).toBe('Lego');
        expect(references[7]?.textContent).toBe('Mercedes');
        expect(references[8]?.textContent).toBe('Richter Gedeon');
        expect(references[9]?.textContent).toBe('Sága');
        expect(references[10]?.textContent).toBe('Samsung');
        expect(references[11]?.textContent).toBe('Schwarzmüller');
        expect(references[12]?.textContent).toBe('Shell');
        expect(references[13]?.textContent).toBe('Spar');
        expect(references[14]?.textContent).toBe('Stop-Shop');
        expect(references[15]?.textContent).toBe('Tesco');
        expect(references[16]?.textContent).toBe('West End');
        expect(references[17]?.textContent).toBe('És még sokan mások…');
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
        expect(linkComponent.isExternal).toBe(false);
        expect(link.nativeElement).toBeTruthy();
        expect(link.nativeElement.textContent).toContain('Tovább a tevékenységekhez');
    });

    it('should display work together', () => {
        const workTogether = fixture.debugElement.queryAll(By.css('app-work-together'));
        expect(workTogether).toBeTruthy();
    });
});
