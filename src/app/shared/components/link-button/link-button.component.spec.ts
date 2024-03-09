import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { LinkButtonComponent } from './link-button.component';

@Component({
    template: '<app-link-button>Test text content</app-link-button>',
    standalone: true,
    imports: [RouterTestingModule, LinkButtonComponent],
})
class TestHostComponent {}

describe('LinkButtonComponent', () => {
    let component: LinkButtonComponent;
    let fixture: ComponentFixture<LinkButtonComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, LinkButtonComponent, TestHostComponent],
        });
        fixture = TestBed.createComponent(LinkButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display the content', () => {
        const testFixture = TestBed.createComponent(TestHostComponent);
        testFixture.detectChanges();

        const linkButton: HTMLElement = testFixture.nativeElement.querySelector('app-link-button');
        expect(linkButton.textContent).toEqual('Test text content');
    });

    it('should handle router links', () => {
        fixture.componentRef.setInput('link', 'test-path');
        fixture.detectChanges();
        const a: HTMLAnchorElement = fixture.nativeElement.querySelector('a');
        expect(a).toBeTruthy();
        expect(a.href).toContain('test-path');
    });

    it('should handle external links', () => {
        fixture.componentRef.setInput('link', 'mailto:test@gmail.com');
        fixture.componentRef.setInput('isExternal', true);
        fixture.detectChanges();
        const a: HTMLAnchorElement = fixture.nativeElement.querySelector('a');
        expect(a).toBeTruthy();
        expect(a.href).toBe('mailto:test@gmail.com');
    });

    it('should display an icon', () => {
        let img: HTMLImageElement = fixture.nativeElement.querySelector('img');
        expect(img).toBeFalsy();

        fixture.componentRef.setInput('svgIcon', 'test-icon');
        fixture.detectChanges();
        img = fixture.nativeElement.querySelector('img');
        expect(img).toBeTruthy();
        expect(img.src).toContain('assets/link-button-icons/test-icon.svg');
        expect(img.alt).toBeFalsy();
    });
});
