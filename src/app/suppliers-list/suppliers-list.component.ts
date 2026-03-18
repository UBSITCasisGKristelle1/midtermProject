import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../models/supplier.interface';
import { SupplierService } from '../../services/supplier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html'
})
export class SuppliersListComponent implements OnInit {

  suppliers: Supplier[] = [];

  constructor(
    private supplierService: SupplierService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.suppliers = this.supplierService.getSuppliers();
  }

  viewSupplierDetails(id: number) {
    this.router.navigate(['/suppliers', id]);
  }
}
