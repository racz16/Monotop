import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReferencesPageComponent } from './references-page.component';

describe('ReferencesPageComponent', () => {
    let component: ReferencesPageComponent;
    let fixture: ComponentFixture<ReferencesPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ReferencesPageComponent],
            imports: [SharedModule, NgbTooltipModule],
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
