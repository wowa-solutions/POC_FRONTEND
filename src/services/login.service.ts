import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastService } from './toastr.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private toastService: ToastService) { }

  loginProcess(userEmail: any, userPassword: any): void {
    this.http.post('http://localhost:3000/login/', { email: userEmail, password: userPassword }).subscribe(data => {
      if (data === true) {
        localStorage.setItem('userToken', 'your-token');
        this.toastService.showSuccess("User is logged in.", "Login successful.");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        this.toastService.showError("User is not logged in.", "Login failed.");
      }
    });
  }

  logoutProcess(){
    localStorage.clear();
    window.location.reload();
  };
}
