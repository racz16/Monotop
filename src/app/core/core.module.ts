import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations: [NavbarComponent],
    imports: [CommonModule, RouterModule, NgbCollapseModule],
    exports: [NavbarComponent],
})
export class CoreModule {}
