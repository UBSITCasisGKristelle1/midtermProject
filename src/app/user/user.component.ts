import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { User } from '../models/user.interface';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-user',
  imports: [FormsModule, CommonModule, UserFormComponent, RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  searchText: string = '';

  users: User[] = [
    { id: 1, firstName: 'Alice', lastName: 'Johnson', email: 'alice@example.com', role: 'Admin' },
    { id: 2, firstName: 'Bob', lastName: 'Smith', email: 'bob@example.com', role: 'User' },
    { id: 3, firstName: 'Carol', lastName: 'Taylor', email: 'carol@example.com', role: 'Editor' },
    { id: 4, firstName: 'David', lastName: 'Brown', email: 'david@example.com', role: 'User' },
    { id: 5, firstName: 'Eve', lastName: 'Davis', email: 'eve@example.com', role: 'Manager' }
  ];

  get filteredUsers(): User[] {
    if (!this.searchText.trim()) {
      return this.users;
    }
    const term = this.searchText.toLowerCase();
    return this.users.filter(u =>
      u.firstName.toLowerCase().includes(term) ||
      u.lastName.toLowerCase().includes(term) ||
      u.email.toLowerCase().includes(term) ||
      u.role.toLowerCase().includes(term)
    );
  }

  selectedUser!: User;
  showModal: boolean = false;
  showAddModal: boolean = false;
  newUser: User = { id: 0, firstName: '', lastName: '', email: '', role: '' };

  constructor(private router: Router) {}

  viewUserDetailsPage(user: User) {
    this.router.navigate(['/users', user.id]);
  }

  viewUserDetails(user: User) {
    this.selectedUser = { ...user };
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  openAddUserModal() {
    this.newUser = { id: 0, firstName: '', lastName: '', email: '', role: '' };
    this.showAddModal = true;
  }

  closeAddModal() {
    this.showAddModal = false;
  }

  onUserUpdate(updatedUser: User) {
    const index = this.users.findIndex(u => u.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = { ...updatedUser };
    }
  }

  addNewUser() {
    if (this.newUser.firstName && this.newUser.lastName && this.newUser.email && this.newUser.role) {
      const maxId = Math.max(...this.users.map(u => u.id));
      this.newUser.id = maxId + 1;
      this.users.push({ ...this.newUser });
      this.closeAddModal();
    }
  }

  deleteUser(id: number) {
    this.users = this.users.filter(u => u.id !== id);
  }
}
