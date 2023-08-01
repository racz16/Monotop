import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
    declarations: [MainPageComponent, ContactPageComponent],
    imports: [CommonModule, SharedModule],
})
export class PagesModule {}
