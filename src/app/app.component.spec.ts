import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';

describe('AppComponent', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, CoreModule, PagesModule],
            declarations: [AppComponent],
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
