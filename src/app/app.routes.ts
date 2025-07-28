import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';
import { Login } from './login/login';
import { Home } from './home/home';
import { Error } from './error/error';
import { Notfound404 } from './notfound404/notfound404';


export const routes: Routes = [
    { path: '', component: Home, canActivate: [AuthGuard] },
    { path: 'login', component: Login },
    { path: 'error', component: Error , canActivate: [AuthGuard] },
    { path: 'notfound', component: Notfound404 }
];