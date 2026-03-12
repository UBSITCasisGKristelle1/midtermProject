import { Routes } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { UserComponent } from './user/user.component';
import { ServicesComponent } from './services/services.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { AnalyticsComponent } from './analytics/analytics.component';

export const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'products', component: ProductsComponent },
    { path: 'products/:id', component: ViewDetailsComponent },
    { path: 'users', component: UserComponent },
    { path: 'users/:id', component: UserDetailsComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'services/:id', component: ServiceDetailsComponent },
    { path: 'analytics', component: AnalyticsComponent },
];