import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component } from '@angular/core';
import { ListBoxComponent } from './list-box.component';

@Component({
    template: '<app-list-box>Test text content</app-list-box>',
})
class TestHostComponent {}

describe('ListBoxComponent', () => {
    let component: ListBoxComponent;
    let fixture: ComponentFixture<ListBoxComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ListBoxComponent],
        });
        fixture = TestBed.createComponent(ListBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display the content', () => {
        const testFixture = TestBed.createComponent(TestHostComponent);
        testFixture.detectChanges();

        const linkButton: HTMLElement = testFixture.nativeElement.querySelector('app-list-box');
        expect(linkButton.textContent).toEqual('Test text content');
    });

    it('should display the title', () => {
        fixture.componentRef.setInput('headerTitle', 'Test title');
        fixture.detectChanges();
        const title: HTMLDivElement = fixture.nativeElement.querySelector('.header');
        expect(title).toBeTruthy();
        expect(title.textContent).toContain('Test title');
    });

    it('should display the title with the given background image', () => {
        fixture.componentRef.setInput('headerBackgroundImagePath', 'test.jpg');
        fixture.detectChanges();
        const title: HTMLDivElement = fixture.nativeElement.querySelector('.header');
        expect(title).toBeTruthy();
        expect(title.style.backgroundImage).toContain('test.jpg');
    });
});
