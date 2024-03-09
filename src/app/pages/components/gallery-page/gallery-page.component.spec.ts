import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbCarousel, NgbSlide } from '@ng-bootstrap/ng-bootstrap';
import { GalleryPageComponent } from './gallery-page.component';

describe('GalleryPageComponent', () => {
    let component: GalleryPageComponent;
    let fixture: ComponentFixture<GalleryPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NgbCarousel, NgbSlide, GalleryPageComponent],
        });
        fixture = TestBed.createComponent(GalleryPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
