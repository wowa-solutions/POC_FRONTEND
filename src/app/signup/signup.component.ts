import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  signupForm = this.formBuilder.group({
    Username: '',
    Email: '',
    Password: '',
  });

  signUpProcess() {
    // ToDo: Add Login process here
    this.router.navigate(['/qr']);
  }
}
