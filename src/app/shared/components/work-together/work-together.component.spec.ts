import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DotsComponent } from '../dots/dots.component';
import { LinkButtonComponent } from '../link-button/link-button.component';
import { WorkTogetherComponent } from './work-together.component';

describe('WorkTogetherComponent', () => {
    let component: WorkTogetherComponent;
    let fixture: ComponentFixture<WorkTogetherComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [WorkTogetherComponent, LinkButtonComponent, DotsComponent],
        });
        fixture = TestBed.createComponent(WorkTogetherComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display a title and a text', () => {
        const title: HTMLHeadingElement = fixture.nativeElement.querySelector('h2');
        const text: HTMLDivElement = fixture.nativeElement.querySelector('.work-together-text');
        expect(title).toBeTruthy();
        expect(title.textContent).toBe('Dolgozzunk együtt!');
        expect(text).toBeTruthy();
        expect(text.textContent).toContain(
            'Amennyiben felkeltettük érdeklődését vagy további információra van szüksége, keressen bennünket bizalommal!'
        );
    });

    it('should display a link', () => {
        const link = fixture.debugElement.query(By.css('app-link-button'));
        expect(link).toBeTruthy();
        const linkComponent = link.componentInstance;
        expect(linkComponent).toBeTruthy();
        expect(linkComponent.svgIcon).toBe('envelope');
        expect(linkComponent.link).toBe('mailto:info@monotop.hu');
        expect(linkComponent.isExternal).toBe(true);
        expect(link.nativeElement).toBeTruthy();
        expect(link.nativeElement.textContent).toContain('Ajánlatot kérek');
    });

    it('should display dots', () => {
        const dots: DotsComponent = fixture.debugElement.query(By.css('app-dots'))?.componentInstance;
        expect(dots).toBeTruthy();
        expect(dots.rectangles).toEqual([
            { x: 0, y: 0, width: 12, height: 8 },
            { x: 7, y: 5, width: 12, height: 8 },
        ]);
        expect(dots.normalColor).toBe('#555f6733');
        expect(dots.intersectionColor).toBe('#62e067');
    });
});
