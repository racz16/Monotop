import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { GalleryPageComponent } from './gallery-page.component';

describe('GalleryPageComponent', () => {
    let component: GalleryPageComponent;
    let fixture: ComponentFixture<GalleryPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [GalleryPageComponent],
            imports: [SharedModule, NgbCarouselModule],
        });
        fixture = TestBed.createComponent(GalleryPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
