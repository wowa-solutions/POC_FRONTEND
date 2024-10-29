import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-payment-methods',
  templateUrl: './user-payment-methods.component.html',
  styleUrls: ['./user-payment-methods.component.css']
})
export class UserPaymentMethodsComponent implements OnInit {
  paymentMethods = [
    { type: 'Credit Card', details: '**** **** **** 1234' },
    { type: 'PayPal', details: 'user@example.com' }
    // Weitere Zahlungsmethoden können hier hinzugefügt werden
  ];

  editMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  savePaymentMethods(): void {
    // Hier könnte der Code zum Speichern der Zahlungsmethoden hinzugefügt werden.
    this.toggleEditMode();
  }
}
