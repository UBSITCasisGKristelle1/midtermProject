import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from '../../models/supplier.interface';
import { SupplierService } from '../../services/supplier.service';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html'
})
export class SupplierDetailsComponent implements OnInit {

  supplier?: Supplier;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private supplierService: SupplierService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.supplier = this.supplierService.getSupplierById(id);
  }

  saveChanges() {
    if (this.supplier) {
      this.supplierService.updateSupplier(this.supplier);
      alert('Supplier updated!');
    }
  }

  goBack() {
    this.router.navigate(['/suppliers']);
  }
}
