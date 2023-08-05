import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DotsComponent } from './dots/dots.component';
import { LinkButtonComponent } from './link-button/link-button.component';
import { ListBoxComponent } from './list-box/list-box.component';
import { WorkTogetherComponent } from './work-together/work-together.component';

@NgModule({
    declarations: [LinkButtonComponent, DotsComponent, WorkTogetherComponent, ListBoxComponent],
    imports: [CommonModule, RouterModule],
    exports: [LinkButtonComponent, DotsComponent, WorkTogetherComponent],
})
export class SharedModule {}
