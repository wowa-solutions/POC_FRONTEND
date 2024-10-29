import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPaymentMethodsComponent } from './user-payment-methods.component';

describe('PaymentMethodsComponent', () => {
  let component: UserPaymentMethodsComponent;
  let fixture: ComponentFixture<UserPaymentMethodsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPaymentMethodsComponent]
    });
    fixture = TestBed.createComponent(UserPaymentMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
