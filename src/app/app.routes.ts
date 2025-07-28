import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
         loadComponent: () => {return import('./home/home').then(m => m.Home);}
     }, {
         path: 'authentication',
         pathMatch: 'full',
        loadComponent: () => {return import('./authentication/authentication').then(m => m.Authentication);}
     }, {
         path: 'error',
         loadComponent: () => {return import('./error/error').then(m => m.Error);}
    }
];
