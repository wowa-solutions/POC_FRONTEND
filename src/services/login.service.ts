import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginProcess(userEmail: any, userPassword: any): void {
    this.http.post('http://localhost:3000/login/', { email: userEmail, password: userPassword }).subscribe(data => {
      console.log("User valid: ", data);
      if (data === true) {
        console.log("Lade Seite neu...");
        localStorage.setItem('userToken', 'your-token');
        window.location.reload();
      } else {
        console.log("Try again.");
      }
    });
  }

  logoutProcess(){
    localStorage.clear();
    window.location.reload();
  };
}
