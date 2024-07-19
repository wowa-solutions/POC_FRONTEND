import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';
import { ToastService } from 'src/services/toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



    constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router, private loginService: LoginService, private toastService: ToastService){

    }

    ngOnInit(): void {
    }

    signupForm = this.formBuilder.group({
      Username: '',
      Email: '',
      Password: ''
    });

    loginForm = this.formBuilder.group({
      Email: '',
      // UserName: '',
      Password: ''
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

    loginProcess(): void {

      var userEmail = this.loginForm.value.Email?.toString();
      var userPassword = this.loginForm.value.Password?.toString();
      this.loginService.loginProcess(userEmail, userPassword);

      console.log({ email: this.loginForm.value.Email, password: this.loginForm.value.Password });
    }

    signUpProcess(){
      // ToDo: Add Login process here
      this.router.navigate(['/qr']);      
    }
}
