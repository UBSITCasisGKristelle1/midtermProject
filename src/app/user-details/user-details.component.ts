import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-user-details',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  user: User | null = null;
  isEditing = false;
  editUser: User | null = null;

  private sampleUsers: User[] = [
    { id: 1, firstName: 'Alice', lastName: 'Johnson', email: 'alice@example.com', role: 'Admin' },
    { id: 2, firstName: 'Bob', lastName: 'Smith', email: 'bob@example.com', role: 'User' },
    { id: 3, firstName: 'Carol', lastName: 'Taylor', email: 'carol@example.com', role: 'Editor' },
    { id: 4, firstName: 'David', lastName: 'Brown', email: 'david@example.com', role: 'User' },
    { id: 5, firstName: 'Eve', lastName: 'Davis', email: 'eve@example.com', role: 'Manager' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id') || '1');
      this.user = this.sampleUsers.find(u => u.id === id) || this.sampleUsers[0];
      if (this.user) {
        this.editUser = { ...this.user };
      }
    });
  }

  toggleEdit() {
    if (this.isEditing) {
      this.editUser = this.user ? { ...this.user } : null;
    }
    this.isEditing = !this.isEditing;
  }

  saveChanges() {
    if (this.editUser && this.user) {
      this.user = { ...this.editUser };
      this.isEditing = false;
    }
  }

  cancelEdit() {
    this.editUser = this.user ? { ...this.user } : null;
    this.isEditing = false;
  }
}