import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { ReferencesPageComponent } from './references-page.component';

describe('ReferencesPageComponent', () => {
    let component: ReferencesPageComponent;
    let fixture: ComponentFixture<ReferencesPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NgbTooltip, ReferencesPageComponent],
        });
        fixture = TestBed.createComponent(ReferencesPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display the map', () => {
        const map: HTMLImageElement = fixture.nativeElement.querySelector('.hungary');
        expect(map).toBeTruthy();
        expect(map.src).toContain('hungary-map.svg');
    });
});
