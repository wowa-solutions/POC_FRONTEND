import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-new',
  templateUrl: './payment-new.component.html',
  styleUrls: ['./payment-new.component.css'],
  
})
export class PaymentNewComponent {
  newsletter: boolean = false;
  saveInfo: boolean = false;
  paymentMethod: string = 'bank';
  billingAddress: string = 'same';
  countries = [
    { label: 'Deutschland', value: 'DE' },
    { label: 'Österreich', value: 'AU' },
    { label: 'Schweiz', value: 'CH' },
    // Add other countries as needed
  ];
  selectedCountry: string = 'DE';
}

