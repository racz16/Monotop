import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from './core/components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NavbarComponent, RouterOutlet, FooterComponent],
})
export class AppComponent {}
