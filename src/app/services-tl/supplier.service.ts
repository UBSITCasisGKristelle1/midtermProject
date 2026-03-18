import { Injectable } from '@angular/core';
import { Supplier } from '../models/supplier.interface';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private suppliers: Supplier[] = [
    { id: 1, supplierName: 'Tech Supplies Co.', location: 'Manila', email: 'tech@supplies.com', contactPerson: 'Juan Dela Cruz', phone: '09123456789', productsSupplied: ['Laptops', 'Keyboards'] },
    { id: 2, supplierName: 'Office Depot', location: 'Baguio', email: 'office@depot.com', contactPerson: 'Maria Santos', phone: '09234567891', productsSupplied: ['Chairs', 'Tables'] },
    { id: 3, supplierName: 'Gadget Hub', location: 'Cebu', email: 'gadget@hub.com', contactPerson: 'Pedro Reyes', phone: '09345678912', productsSupplied: ['Phones', 'Accessories'] },
    { id: 4, supplierName: 'PrintWorks', location: 'Davao', email: 'print@works.com', contactPerson: 'Ana Cruz', phone: '09456789123', productsSupplied: ['Printers', 'Ink'] },
    { id: 5, supplierName: 'IT World', location: 'Quezon City', email: 'it@world.com', contactPerson: 'Mark Lee', phone: '09567891234', productsSupplied: ['Monitors', 'CPU'] },
    { id: 6, supplierName: 'Supply Chain Inc.', location: 'Pasig', email: 'supply@chain.com', contactPerson: 'Lisa Wong', phone: '09678912345', productsSupplied: ['Cables', 'Adapters'] },
    { id: 7, supplierName: 'Digital Source', location: 'Taguig', email: 'digital@source.com', contactPerson: 'Chris Tan', phone: '09789123456', productsSupplied: ['SSD', 'RAM'] },
    { id: 8, supplierName: 'Hardware Plus', location: 'Laguna', email: 'hardware@plus.com', contactPerson: 'Kevin Yu', phone: '09891234567', productsSupplied: ['Tools', 'Equipment'] },
    { id: 9, supplierName: 'ElectroMart', location: 'Batangas', email: 'electro@mart.com', contactPerson: 'Nina Gomez', phone: '09912345678', productsSupplied: ['Appliances'] },
    { id: 10, supplierName: 'NextGen Supplies', location: 'Iloilo', email: 'nextgen@supplies.com', contactPerson: 'Paul Lim', phone: '09111222333', productsSupplied: ['AI Devices'] }
  ];

  getSuppliers(): Supplier[] {
    return this.suppliers;
  }

  getSupplierById(id: number): Supplier | undefined {
    return this.suppliers.find(s => s.id === id);
  }

  updateSupplier(updatedSupplier: Supplier): void {
    const index = this.suppliers.findIndex(s => s.id === updatedSupplier.id);
    if (index !== -1) {
      this.suppliers[index] = updatedSupplier;
    }
  }
}
