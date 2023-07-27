import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LinkButtonComponent } from './link-button/link-button.component';

@NgModule({
    declarations: [LinkButtonComponent],
    imports: [CommonModule, RouterModule],
    exports: [LinkButtonComponent],
})
export class SharedModule {}
