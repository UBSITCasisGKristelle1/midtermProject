import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface StatCard {
  label: string;
  value: number;
  unit: string;
  change: number;
  icon: string;
}

interface MonthlyData {
  month: string;
  products: number;
  users: number;
  services: number;
}

interface TopProduct {
  name: string;
  sales: number;
  revenue: number;
  trend: 'up' | 'down';
}

interface RecentUser {
  name: string;
  role: string;
  joined: string;
  status: 'active' | 'inactive';
}

@Component({
  selector: 'app-analytics',
  imports: [CommonModule, RouterModule],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent implements OnInit {

  statCards: StatCard[] = [
    { label: 'Total Products', value: 128, unit: 'items', change: 12, icon: '📦' },
    { label: 'Total Users', value: 3472, unit: 'users', change: 8, icon: '👥' },
    { label: 'Active Services', value: 3, unit: 'services', change: 0, icon: '⚙️' },
    { label: 'Monthly Revenue', value: 54200, unit: 'USD', change: 21, icon: '💰' },
  ];

  monthlyData: MonthlyData[] = [
    { month: 'Oct', products: 80, users: 2100, services: 2 },
    { month: 'Nov', products: 95, users: 2600, services: 3 },
    { month: 'Dec', products: 110, users: 2900, services: 3 },
    { month: 'Jan', products: 105, users: 3100, services: 3 },
    { month: 'Feb', products: 118, users: 3300, services: 3 },
    { month: 'Mar', products: 128, users: 3472, services: 3 },
  ];

  topProducts: TopProduct[] = [
    { name: 'Product Alpha', sales: 430, revenue: 12900, trend: 'up' },
    { name: 'Product Beta', sales: 310, revenue: 9300, trend: 'up' },
    { name: 'Product Gamma', sales: 280, revenue: 8400, trend: 'down' },
    { name: 'Product Delta', sales: 195, revenue: 5850, trend: 'up' },
    { name: 'Product Epsilon', sales: 150, revenue: 4500, trend: 'down' },
  ];

  recentUsers: RecentUser[] = [
    { name: 'Alice Johnson', role: 'Admin', joined: '2026-03-10', status: 'active' },
    { name: 'Bob Smith', role: 'Editor', joined: '2026-03-08', status: 'active' },
    { name: 'Carol White', role: 'Viewer', joined: '2026-03-05', status: 'inactive' },
    { name: 'David Lee', role: 'Editor', joined: '2026-03-01', status: 'active' },
    { name: 'Eva Brown', role: 'Viewer', joined: '2026-02-28', status: 'active' },
  ];

  maxMonthlyUsers: number = 0;
  maxProductSales: number = 0;

  ngOnInit(): void {
    this.maxMonthlyUsers = Math.max(...this.monthlyData.map(d => d.users));
    this.maxProductSales = Math.max(...this.topProducts.map(p => p.sales));
  }

  getBarHeight(value: number, max: number): number {
    return Math.round((value / max) * 100);
  }

  getUserInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('');
  }
}
