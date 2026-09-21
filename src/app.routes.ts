import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Documentation } from './app/pages/documentation/documentation';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';
import { Customers } from './app/pages/crm/customers';
import { Users } from './app/pages/crm/users';
import { Repair } from './app/pages/jewelry/repair';
import { Labors } from './app/pages/jewelry/labors';
import { RepairForm } from './app/pages/jewelry/repair-form';
import { authGuard } from './app/core/auth.guard';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        canActivate: [authGuard],
        children: [
            { path: '', component: Dashboard },
            { path: 'customers', component: Customers },
            { path: 'users', component: Users },
            { path: 'repairs/new', component: RepairForm },
            { path: 'repairs', component: Repair },
            { path: 'labors', component: Labors },
            { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            { path: 'documentation', component: Documentation },
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
        ]
    },
    { path: 'landing', component: Landing },
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];
