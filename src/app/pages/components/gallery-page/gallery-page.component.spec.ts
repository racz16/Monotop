import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryPageComponent } from './gallery-page.component';

describe('GalleryPageComponent', () => {
    let component: GalleryPageComponent;
    let fixture: ComponentFixture<GalleryPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [GalleryPageComponent],
            imports: [NgbTooltipModule],
        });
        fixture = TestBed.createComponent(GalleryPageComponent);
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
