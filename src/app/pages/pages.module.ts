import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
    declarations: [MainPageComponent, ContactPageComponent, AboutUsPageComponent],
    imports: [CommonModule, SharedModule],
})
export class PagesModule {}
