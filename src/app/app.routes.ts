import { Routes } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'products', component: ProductsComponent },
    { path: 'users', component: UserComponent },
];
