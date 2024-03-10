import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { provideRouter } from '@angular/router';

describe('AppComponent', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [NavbarComponent, FooterComponent, AppComponent],
            providers: [provideRouter([])],
        })
    );

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should display the navbar and the footer', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const navbar: HTMLElement = fixture.nativeElement.querySelector('nav');
        const footer: HTMLElement = fixture.nativeElement.querySelector('footer');
        expect(navbar).toBeTruthy();
        expect(footer).toBeTruthy();
    });
});
