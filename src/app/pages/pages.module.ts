import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
    declarations: [MainPageComponent],
    imports: [CommonModule, SharedModule],
})
export class PagesModule {}
