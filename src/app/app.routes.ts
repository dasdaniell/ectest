import { Routes } from '@angular/router';
import { NewProductComponent } from './new-product/new-product.component';
import { SalesComponent } from './sales/sales.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'welcome', 
        component: WelcomeComponent,
        children: [
            { path: 'new-product', component: NewProductComponent },
            { path: 'sales', component: SalesComponent },
        ]
    },
];