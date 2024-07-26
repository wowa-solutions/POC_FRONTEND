import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastService } from './toastr.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private http: HttpClient
  ) {}

  loginProcess(userEmail: any, userPassword: any): Observable<any> {
    return this.http.post('http://localhost:3000/login/', {
      email: userEmail,
      password: userPassword,
    });
  }

  logoutProcess() {
    localStorage.clear();
    window.location.reload();
  }
}
