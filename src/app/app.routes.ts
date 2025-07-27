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
        path: 'login',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./login/login')
            .then(m => m.Login);
        }
    }, {
        path: 'error',
        loadComponent: () => {
            return import('./error/error')
            .then(m => m.Error);
        }
    }
];
