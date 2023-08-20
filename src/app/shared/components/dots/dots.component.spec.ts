import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rectangle } from '../../interfaces/rectangle';
import { DotsComponent } from './dots.component';

describe('DotsComponent', () => {
    let component: DotsComponent;
    let fixture: ComponentFixture<DotsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DotsComponent],
        });
        fixture = TestBed.createComponent(DotsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should not display any dots by default', () => {
        const rows: NodeListOf<HTMLDivElement> = fixture.nativeElement.querySelectorAll('.dot-row');
        const dots: NodeListOf<HTMLDivElement> = fixture.nativeElement.querySelectorAll('.dot');
        expect(rows.length).toBe(0);
        expect(dots.length).toBe(0);
    });

    it('should display one dot', () => {
        const rectangles: Rectangle[] = [{ x: 0, y: 0, width: 1, height: 1 }];
        fixture.componentRef.setInput('rectangles', rectangles);
        setColors(fixture);
        fixture.detectChanges();
        const rows: NodeListOf<HTMLDivElement> = fixture.nativeElement.querySelectorAll('.dot-row');
        const dots: NodeListOf<HTMLDivElement> = fixture.nativeElement.querySelectorAll('.dot');
        expect(rows.length).toBe(1);
        expect(dots.length).toBe(1);
        expect(dots[0]?.style.backgroundColor).toBe('green');
    });

    it('should display one dot with intersection', () => {
        const rectangles: Rectangle[] = [
            { x: 0, y: 0, width: 1, height: 1 },
            { x: 0, y: 0, width: 1, height: 1 },
        ];
        fixture.componentRef.setInput('rectangles', rectangles);
        setColors(fixture);
        fixture.detectChanges();
        const rows: NodeListOf<HTMLDivElement> = fixture.nativeElement.querySelectorAll('.dot-row');
        const dots: NodeListOf<HTMLDivElement> = fixture.nativeElement.querySelectorAll('.dot');
        expect(rows.length).toBe(1);
        expect(dots.length).toBe(1);
        expect(dots[0]?.style.backgroundColor).toBe('blue');
    });

    it('should display a rectangle of dots', () => {
        const rectangles: Rectangle[] = [{ x: 0, y: 0, width: 3, height: 2 }];
        fixture.componentRef.setInput('rectangles', rectangles);
        setColors(fixture);
        fixture.detectChanges();
        const rows: NodeListOf<HTMLDivElement> = fixture.nativeElement.querySelectorAll('.dot-row');
        const dots: NodeListOf<HTMLDivElement> = fixture.nativeElement.querySelectorAll('.dot');
        expect(rows.length).toBe(2);
        expect(dots.length).toBe(6);
        dots.forEach((dot) => {
            expect(dot.style.backgroundColor).toBe('green');
        });
    });

    it('should display a rectangle of dots and skip the invalid rectangle', () => {
        const rectangles: Rectangle[] = [
            { x: 0, y: 0, width: 3, height: 2 },
            { x: -1, y: 0, width: 0, height: 2 },
        ];
        fixture.componentRef.setInput('rectangles', rectangles);
        setColors(fixture);
        fixture.detectChanges();
        const rows: NodeListOf<HTMLDivElement> = fixture.nativeElement.querySelectorAll('.dot-row');
        const dots: NodeListOf<HTMLDivElement> = fixture.nativeElement.querySelectorAll('.dot');
        expect(rows.length).toBe(2);
        expect(dots.length).toBe(6);
        dots.forEach((dot) => {
            expect(dot.style.backgroundColor).toBe('green');
        });
    });

    it('should display a translated rectangle of dots', () => {
        const rectangles: Rectangle[] = [{ x: 1, y: 2, width: 3, height: 4 }];
        fixture.componentRef.setInput('rectangles', rectangles);
        setColors(fixture);
        fixture.detectChanges();
        const rows: NodeListOf<HTMLDivElement> = fixture.nativeElement.querySelectorAll('.dot-row');
        const dots: NodeListOf<HTMLDivElement> = fixture.nativeElement.querySelectorAll('.dot');
        expect(rows.length).toBe(6);
        expect(dots.length).toBe(24);
        dots.forEach((dot, index) => {
            const x = index % 4;
            const y = Math.floor(index / 4);
            if (x >= 1 && y >= 2) {
                expect(dot.style.backgroundColor).toBe('green');
            } else {
                expect(dot.style.backgroundColor).toBe('red');
            }
        });
    });

    it('should display rectangles of dots', () => {
        const rectangles: Rectangle[] = [
            { x: 0, y: 0, width: 2, height: 2 },
            { x: 2, y: 2, width: 2, height: 2 },
        ];
        fixture.componentRef.setInput('rectangles', rectangles);
        setColors(fixture);
        fixture.detectChanges();
        const rows: NodeListOf<HTMLDivElement> = fixture.nativeElement.querySelectorAll('.dot-row');
        const dots: NodeListOf<HTMLDivElement> = fixture.nativeElement.querySelectorAll('.dot');
        expect(rows.length).toBe(4);
        expect(dots.length).toBe(16);
        dots.forEach((dot, index) => {
            const x = index % 4;
            const y = Math.floor(index / 4);
            if ((x >= 2 && y >= 2) || (x <= 1 && y <= 1)) {
                expect(dot.style.backgroundColor).toBe('green');
            } else {
                expect(dot.style.backgroundColor).toBe('red');
            }
        });
    });

    it('should display intersecting rectangles of dots', () => {
        const rectangles: Rectangle[] = [
            { x: 0, y: 0, width: 2, height: 2 },
            { x: 1, y: 1, width: 2, height: 2 },
        ];
        fixture.componentRef.setInput('rectangles', rectangles);
        setColors(fixture);
        fixture.detectChanges();
        const rows: NodeListOf<HTMLDivElement> = fixture.nativeElement.querySelectorAll('.dot-row');
        const dots: NodeListOf<HTMLDivElement> = fixture.nativeElement.querySelectorAll('.dot');
        expect(rows.length).toBe(3);
        expect(dots.length).toBe(9);
        dots.forEach((dot, index) => {
            const x = index % 3;
            const y = Math.floor(index / 3);
            if (x === 1 && y == 1) {
                expect(dot.style.backgroundColor).toBe('blue');
            } else if ((x >= 1 && y >= 1) || (x <= 1 && y <= 1)) {
                expect(dot.style.backgroundColor).toBe('green');
            } else {
                expect(dot.style.backgroundColor).toBe('red');
            }
        });
    });

    it('should display intersecting rectangles of dots with the default colors', () => {
        const rectangles: Rectangle[] = [
            { x: 0, y: 0, width: 2, height: 2 },
            { x: 1, y: 1, width: 2, height: 2 },
        ];
        fixture.componentRef.setInput('rectangles', rectangles);
        fixture.detectChanges();
        const rows: NodeListOf<HTMLDivElement> = fixture.nativeElement.querySelectorAll('.dot-row');
        const dots: NodeListOf<HTMLDivElement> = fixture.nativeElement.querySelectorAll('.dot');
        expect(rows.length).toBe(3);
        expect(dots.length).toBe(9);
        dots.forEach((dot, index) => {
            const x = index % 3;
            const y = Math.floor(index / 3);
            if (x === 1 && y == 1) {
                expect(dot.style.backgroundColor).toBe('rgba(85, 95, 103, 0.2)');
            } else if ((x >= 1 && y >= 1) || (x <= 1 && y <= 1)) {
                expect(dot.style.backgroundColor).toBe('rgb(98, 224, 103)');
            } else {
                expect(dot.style.backgroundColor).toBe('transparent');
            }
        });
    });
});

function setColors(fixture: ComponentFixture<DotsComponent>): void {
    fixture.componentRef.setInput('emptyColor', 'red');
    fixture.componentRef.setInput('normalColor', 'green');
    fixture.componentRef.setInput('intersectionColor', 'blue');
}
