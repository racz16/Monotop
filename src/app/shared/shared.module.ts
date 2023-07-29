import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DotsComponent } from './dots/dots.component';
import { LinkButtonComponent } from './link-button/link-button.component';

@NgModule({
    declarations: [LinkButtonComponent, DotsComponent],
    imports: [CommonModule, RouterModule],
    exports: [LinkButtonComponent, DotsComponent],
})
export class SharedModule {}
