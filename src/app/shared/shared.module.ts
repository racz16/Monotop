import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DotsComponent } from './components/dots/dots.component';
import { LinkButtonComponent } from './components/link-button/link-button.component';
import { ListBoxComponent } from './components/list-box/list-box.component';
import { WorkTogetherComponent } from './components/work-together/work-together.component';

@NgModule({
    declarations: [LinkButtonComponent, DotsComponent, WorkTogetherComponent, ListBoxComponent],
    imports: [CommonModule, RouterModule],
    exports: [LinkButtonComponent, DotsComponent, ListBoxComponent, WorkTogetherComponent],
})
export class SharedModule {}
