import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../models/user.interface';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-user',
  imports: [FormsModule, CommonModule, UserFormComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users: User[] = [
    { id: 1, firstName: 'Alice', lastName: 'Johnson', email: 'alice@example.com', role: 'Admin' },
    { id: 2, firstName: 'Bob', lastName: 'Smith', email: 'bob@example.com', role: 'User' },
    { id: 3, firstName: 'Carol', lastName: 'Taylor', email: 'carol@example.com', role: 'Editor' }
  ];

  selectedUser!: User;
  showModal: boolean = false;

  viewUserDetails(user: User) {
    this.selectedUser = { ...user };
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onUserUpdate(updatedUser: User) {
    const index = this.users.findIndex(u => u.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = { ...updatedUser };
    }
  }
}
