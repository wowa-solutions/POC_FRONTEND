import { Component, OnInit } from '@angular/core';
import { UserManagement } from 'src/models/models';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-cms-users',
  templateUrl: './cms-users.component.html',
  styleUrls: ['./cms-users.component.css']
})
export class CmsUsersComponent implements OnInit {
  users: UserManagement[] = [];
  filteredUsers: UserManagement[] = [];
  selectedUser: UserManagement | null = null;
  editMode: boolean = false;
  roles: { label: string, value: string }[] = [
    { label: 'User', value: 'user' },
    { label: 'Admin', value: 'admin' }
  ];
  searchQuery: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.filteredUsers = [...this.users];  // Deep copy to ensure identical entries are preserved
  }

  selectUser(user: UserManagement): void {
    this.selectedUser = { ...user };
    this.editMode = false;
  }

  editUser(): void {
    this.editMode = true;
  }

  saveUser(): void {
    if (this.selectedUser) {
      this.userService.updateUser(this.selectedUser);
      this.users = this.userService.getUsers();
      this.filteredUsers = this.users.filter(user =>
        Object.values(user).some(value =>
          String(value).toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      );
      this.selectedUser = null;
      this.editMode = false;
    }
  }

  cancelEdit(): void {
    this.selectedUser = null;
    this.editMode = false;
  }

  filterUsers(): void {
    if (this.searchQuery.trim() === '') {
      this.filteredUsers = [...this.users]; // Reset to original list with deep copy
    } else {
      this.filteredUsers = this.users.filter(user =>
        Object.values(user).some(value =>
          String(value).toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      );
    }
  }
}
