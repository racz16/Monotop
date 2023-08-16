import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { ActivitiesPageComponent } from './pages/activities-page/activities-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: MainPageComponent,
    },
    {
        path: 'rolunk',
        component: AboutUsPageComponent,
    },
    {
        path: 'tevekenysegek',
        component: ActivitiesPageComponent,
    },
    {
        path: 'kapcsolat',
        component: ContactPageComponent,
    },
    {
        path: '**',
        redirectTo: '',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
