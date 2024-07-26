import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval, switchMap } from 'rxjs';
import { UserManagement } from 'src/models/models';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private checkInterval = 15000; // TODO: ANPASSEN | Hinweis: 5 Minuten in Millisekunden = 300000
  private userId = localStorage.getItem('userId'); // Setze die Benutzer-ID, die überprüft werden soll
  private backendUrl = 'http://localhost:3000/users/single'; // Setze die URL deines Backends

  constructor(private http: HttpClient) {
    this.startUserLoggedInCheck();
  }

  // Purpose of this function is to check if the user is logged in or not. 
  private startUserLoggedInCheck() {
    interval(this.checkInterval)
      .pipe(
        switchMap(() => this.checkIfUserLoggedIn())
      )
      .subscribe(response => {
        console.log('User login response:', response);
        if (!response.loggedin || !localStorage.getItem('userId')) {
          localStorage.clear();
          console.log('User is not logged in.');
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        }
        else{
          console.log('User is still logged in.')
        }
      });
  }

  private checkIfUserLoggedIn(): Observable<UserManagement> {
    return this.http.get<UserManagement>(`${this.backendUrl}?id=${this.userId}`);
  }
}
