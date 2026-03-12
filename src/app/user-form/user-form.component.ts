import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  @Input() user!: User;
  @Output() userChange = new EventEmitter<User>();

  onUserChange() {
    this.userChange.emit(this.user);
  }
}