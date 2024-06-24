import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Todos } from 'src/models/models';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



    constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router){

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

    loginProcess(){
      var validUser = false;
      console.log({email: this.loginForm.value.Email, username: '', password: this.loginForm.value.Password});
      this.http.post('http://localhost:3000/login/', {email: this.loginForm.value.Email, username: '', password: this.loginForm.value.Password}).subscribe(data => 
      {        
        console.log("User valid: ", data);
        if(data === true){
          this.router.navigate(['/qr']); 
        }
        else{
          console.log("Try again.");
        }
      });
    }

    signUpProcess(){
      // ToDo: Add Login process here
      this.router.navigate(['/qr']);      
    }

}
