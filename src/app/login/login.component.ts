import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';
import { ToastService } from 'src/services/toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastService,
  ) {}

  ngOnInit(): void {}

  signupForm = this.formBuilder.group({
    Username: '',
    Email: '',
    Password: '',
  });

  loginForm = this.formBuilder.group({
    Email: '',
    // UserName: '',
    Password: '',
  });

  onSubmitSignUp(): void {
    console.log(this.signupForm.value);
    this.refreshForm();
  }

  onSubmitLogin(): void {
    console.log(this.loginForm.value);
    this.refreshForm();
  }

  refreshForm() {
    this.loginForm.reset();
    this.signupForm.reset();
  }

  loginProcess() {
    const userEmail = this.loginForm.value.Email?.toString();
    const userPassword = this.loginForm.value.Password?.toString();

    this.loginService.loginProcess(userEmail, userPassword).subscribe(
      (data: any) => {

        if (data) {

      
          localStorage.setItem('userToken', 'your-token'); // richtigen token erstellen
          localStorage.setItem('userId', data._id); // userId in Storage speichern, wird im user.service verwendet, um zu überprüfen, ob der user noch eingeloggt ist
          this.toastService.showSuccess(
            'User is logged in.',
            'Login successful.'
          );
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        } else {
          this.toastService.showError(
            'User is not logged in.',
            'Login failed.'
          );
        }
        console.log('Login response:', data);
      },
      error => {
        console.error('Login request failed:', error);
        this.toastService.showError(
          'An error occurred during login.',
          'Login failed.'
        );
      }
    );
  }

  signUpProcess() {
    // ToDo: Add Login process here
    this.router.navigate(['/qr']);
  }
}
