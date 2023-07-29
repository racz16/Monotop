import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations: [NavbarComponent, FooterComponent],
    imports: [CommonModule, RouterModule, NgbCollapseModule],
    exports: [NavbarComponent, FooterComponent],
})
export class CoreModule {}
