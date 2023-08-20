import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './pages/components/about-us-page/about-us-page.component';
import { ActivitiesPageComponent } from './pages/components/activities-page/activities-page.component';
import { ContactPageComponent } from './pages/components/contact-page/contact-page.component';
import { MainPageComponent } from './pages/components/main-page/main-page.component';

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
