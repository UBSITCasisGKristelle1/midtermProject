import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

interface Service {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-service-details',
  imports: [CommonModule],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.css'
})
export class ServiceDetailsComponent implements OnInit {
  service: Service | null = null;

  private allServices: Service[] = [
    { id: 1, name: 'Product Management', description: 'Manage your product inventory and details' },
    { id: 2, name: 'User Management', description: 'Manage user accounts and roles' },
    { id: 3, name: 'Analytics', description: 'View detailed analytics and reports' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id') || '1');
      this.service = this.allServices.find(s => s.id === id) || null;
    });
  }
}