import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductsComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'product-app';
}
