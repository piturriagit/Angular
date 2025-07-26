import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./home/home')
            .then(m => m.Home);
        }
    }, {
        path: 'error',
        loadComponent: () => {
            return import('./error/error')
            .then(m => m.Error);
        }
    }
];
