import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Product } from '../app/models/product.interface';
import { ProductFormComponent } from '../app/product-form/product-form.component';

@Component({
  selector: 'app-products',
  imports: [FormsModule, CommonModule, ProductFormComponent, RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

products: Product[] = [
{
id: 1,
name: 'Laptop',
category: 'Electronics',
price: 45000,
stock: 10,
status: 'Available',
description: 'High performance laptop for school and work.'
},
{
id: 2,
name: 'Headphones',
category: 'Accessories',
price: 1500,
stock: 25,
status: 'Available',
description: 'Noise cancelling headphones.'
},
{
id: 3,
name: 'Keyboard',
category: 'Accessories',
price: 800,
stock: 0,
status: 'Out of Stock',
description: 'Mechanical RGB keyboard.'
},
{
id: 4,
name: 'Mouse',
category: 'Accessories',
price: 600,
stock: 15,
status: 'Available',
description: 'Wireless optical mouse.'
},
{
id: 5,
name: 'Monitor',
category: 'Electronics',
price: 12000,
stock: 5,
status: 'Available',
description: '24-inch Full HD monitor.'
},
{
id: 6,
name: 'Printer',
category: 'Electronics',
price: 7000,
stock: 3,
status: 'Low Stock',
description: 'All-in-one inkjet printer.'
},
{
id: 7,
name: 'Tablet',
category: 'Electronics',
price: 18000,
stock: 8,
status: 'Available',
description: 'Portable tablet device.'
},
{
id: 8,
name: 'Flash Drive',
category: 'Storage',
price: 500,
stock: 50,
status: 'Available',
description: '64GB USB flash drive.'
},
{
id: 9,
name: 'External HDD',
category: 'Storage',
price: 3500,
stock: 7,
status: 'Available',
description: '1TB external hard drive.'
},
{
id: 10,
name: 'Webcam',
category: 'Accessories',
price: 1200,
stock: 0,
status: 'Out of Stock',
description: 'HD webcam for video meetings.'
}
];

selectedProduct!: Product;
showModal: boolean = false;

constructor(private router: Router) {}

viewProductDetails(product: Product) {
this.router.navigate(['/products', product.id]);
}

viewProductDetailsModal(product: Product) {
this.selectedProduct = product;
this.showModal = true;
}

closeModal() {
this.showModal = false;
}

onProductUpdate(updatedProduct: Product) {
const index = this.products.findIndex(p => p.id === updatedProduct.id);
if (index !== -1) {
this.products[index] = { ...updatedProduct };   
}
}
}
