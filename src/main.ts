/// <reference types="@angular/localize" />

import { isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { AppComponent } from './app/app.component';
import { AboutUsPageComponent } from './app/pages/components/about-us-page/about-us-page.component';
import { ActivitiesPageComponent } from './app/pages/components/activities-page/activities-page.component';
import { ContactPageComponent } from './app/pages/components/contact-page/contact-page.component';
import { GalleryPageComponent } from './app/pages/components/gallery-page/gallery-page.component';
import { MainPageComponent } from './app/pages/components/main-page/main-page.component';
import { ReferencesPageComponent } from './app/pages/components/references-page/references-page.component';

bootstrapApplication(AppComponent, {
    providers: [
        provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000',
        }),
        provideRouter(
            [
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
                    path: 'referenciak',
                    component: ReferencesPageComponent,
                },
                {
                    path: 'galeria',
                    component: GalleryPageComponent,
                },
                {
                    path: 'kapcsolat',
                    component: ContactPageComponent,
                },
                {
                    path: '**',
                    redirectTo: '',
                },
            ],
            withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })
        ),
    ],
}).catch((err) => console.error(err));
