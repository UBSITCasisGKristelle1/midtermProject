import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    { id: 1, name: 'Product Management', description: 'Manage your product inventory and details' },
    { id: 2, name: 'User Management', description: 'Manage user accounts and roles' },
    { id: 3, name: 'Analytics', description: 'View detailed analytics and reports' }
  ];
}
