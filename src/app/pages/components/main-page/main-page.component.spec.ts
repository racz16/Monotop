import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { DotsComponent } from 'src/app/shared/components/dots/dots.component';
import { WorkTogetherComponent } from 'src/app/shared/components/work-together/work-together.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainPageComponent } from './main-page.component';

describe('MainPageComponent', () => {
    let component: MainPageComponent;
    let fixture: ComponentFixture<MainPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MainPageComponent],
            imports: [SharedModule, RouterTestingModule],
        });
        fixture = TestBed.createComponent(MainPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display 3 sections and there should be a work together part', () => {
        const sections: NodeListOf<HTMLElement> = fixture.nativeElement.querySelectorAll('section');
        const workTogether: WorkTogetherComponent = fixture.debugElement.query(
            By.css('app-work-together')
        )?.componentInstance;
        expect(sections).toBeTruthy();
        expect(sections.length).toBe(3);
        expect(workTogether).toBeTruthy();
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
        expect(link.nativeElement.textContent).toContain('Tevékenységek');
    });

    it('should display dots', () => {
        const dots = fixture.debugElement.queryAll(By.css('app-dots'));
        expect(dots).toBeTruthy();
        expect(dots.length).toBe(3);

        let dotsComponent: DotsComponent = dots[0]?.componentInstance;
        expect(dotsComponent).toBeTruthy();
        expect(dotsComponent.rectangles).toEqual([{ x: 0, y: 0, width: 12, height: 6 }]);
        expect(dotsComponent.normalColor).toBe('#62e067');
        expect(dotsComponent.intersectionColor).toBe('#555f6733');

        dotsComponent = dots[1]?.componentInstance;
        expect(dotsComponent).toBeTruthy();
        expect(dotsComponent.rectangles).toEqual([{ x: 0, y: 0, width: 12, height: 6 }]);
        expect(dotsComponent.normalColor).toBe('#62e067');
        expect(dotsComponent.intersectionColor).toBe('#555f6733');
    });

    it('should display images', () => {
        const image1: HTMLImageElement = fixture.nativeElement.querySelector('.image-container img');
        const image2: HTMLImageElement = fixture.nativeElement.querySelector('.image-container-2 img');
        const awardLogo: HTMLImageElement = fixture.nativeElement.querySelector('.award-card img');
        expect(image1).toBeTruthy();
        expect(image1.src).toContain('main-1-700.jpg');
        expect(image2).toBeTruthy();
        expect(image2.src).toContain('main-2-840.jpg');
        expect(awardLogo).toBeTruthy();
        expect(awardLogo.src).toContain('award-logo.png');
    });

    it('should display text', () => {
        const h1s: NodeListOf<HTMLHeadingElement> = fixture.nativeElement.querySelectorAll('h1');
        const awardTitle: HTMLSpanElement = fixture.nativeElement.querySelector('.award-title');
        const awardText: HTMLSpanElement = fixture.nativeElement.querySelector('.award-text');
        const yearsText: HTMLDivElement = fixture.nativeElement.querySelector('.years-text');
        const greenCardTitle: HTMLDivElement = fixture.nativeElement.querySelector('.green-card-title');
        const greenCardText: HTMLDivElement = fixture.nativeElement.querySelector('.green-card-text');
        expect(h1s).toBeTruthy();
        expect(h1s.length).toBe(2);
        expect(h1s[0]?.textContent).toBe('Ipari padlót készítünk');
        expect(h1s[1]?.textContent).toBe('28 éve töretlenül');
        expect(awardTitle).toBeTruthy();
        expect(awardTitle.textContent).toBe('MONOTOP Kft.');
        expect(awardText).toBeTruthy();
        expect(awardText.textContent).toBe('Mesterdíjas kivitelező');
        expect(yearsText).toBeTruthy();
        expect(yearsText.textContent).toContain(
            'Évente 100.000 - 150.000 m2 monolit betonlemezt, ipari padlót, alaplemezt, felbetont készítünk el.'
        );
        expect(greenCardTitle).toBeTruthy();
        expect(greenCardTitle.textContent).toContain('150.000 m2');
        expect(greenCardText).toBeTruthy();
        expect(greenCardText.textContent).toContain(
            'Ez nagyjából annyi, mint 21 nagypályás futballpálya vagy a teljes budai rakpart lebetonozása - minden évben.'
        );
    });
});
