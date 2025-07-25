import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./home/home')
            .then(m => m.Home);
        }
    }, 
    {
        path: 'edit',
        loadComponent: () => {
            return import('./edit/edit')
            .then(m => m.Edit);
        }
    }
];
