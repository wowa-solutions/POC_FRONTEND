import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent implements OnInit {
  user = {
    id: 1,
    username: 'john_doe',
    firstname: 'John',
    lastname: 'Doe',
    postcode: '12345',
    street: 'Main St',
    number: '1234',
    city: 'Anytown',
    country: 'USA'
  };

  editMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  saveProfile(): void {
    // Hier könnte der Code zum Speichern des Profils hinzugefügt werden.
    this.toggleEditMode();
  }
}
