import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencesPageComponent } from './references-page.component';

describe('ReferencesPageComponent', () => {
    let component: ReferencesPageComponent;
    let fixture: ComponentFixture<ReferencesPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ReferencesPageComponent],
        });
        fixture = TestBed.createComponent(ReferencesPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
