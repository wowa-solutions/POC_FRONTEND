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

  private users: UserManagement[] = [
    {
      email: 'john.doe@example.com',
      userName: 'johndoe',
      password: '*****',
      postcode: '12345',
      firstName: 'John',
      lastName: 'Doe',
      street: 'Main St',
      streetnumber: '1',
      country: 'USA',
      loggedin: true,
      confirmed: true,
      role: 'user'
    },
    {
      email: 'jane.doe@example.com',
      userName: 'janedoe',
      password: '*****',
      postcode: '67890',
      firstName: 'Jane',
      lastName: 'Doe',
      street: 'Second St',
      streetnumber: '2',
      country: 'USA',
      loggedin: false,
      confirmed: true,
      role: 'admin'
    },
    {
      email: 'jane.doe@example.com',
      userName: 'janedoe',
      password: '*****',
      postcode: '67890',
      firstName: 'Jane',
      lastName: 'Doe',
      street: 'Second St',
      streetnumber: '2',
      country: 'USA',
      loggedin: false,
      confirmed: true,
      role: 'admin'
    },
    {
      email: 'jane.doe@example.com',
      userName: 'janedoe',
      password: '*****',
      postcode: '67890',
      firstName: 'Jane',
      lastName: 'Doe',
      street: 'Second St',
      streetnumber: '2',
      country: 'USA',
      loggedin: false,
      confirmed: true,
      role: 'admin'
    },
    {
      email: 'jane.doe@example.com',
      userName: 'janedoe',
      password: '*****',
      postcode: '67890',
      firstName: 'Jane',
      lastName: 'Doe',
      street: 'Second St',
      streetnumber: '2',
      country: 'USA',
      loggedin: false,
      confirmed: true,
      role: 'admin'
    },
    {
      email: 'jane.doe@example.com',
      userName: 'janedoe',
      password: '*****',
      postcode: '67890',
      firstName: 'Jane',
      lastName: 'Doe',
      street: 'Second St',
      streetnumber: '2',
      country: 'USA',
      loggedin: false,
      confirmed: true,
      role: 'admin'
    },
    {
      email: 'jane.doe@example.com',
      userName: 'janedoe',
      password: '*****',
      postcode: '67890',
      firstName: 'Jane',
      lastName: 'Doe',
      street: 'Second St',
      streetnumber: '2',
      country: 'USA',
      loggedin: false,
      confirmed: true,
      role: 'admin'
    },
    {
      email: 'john.doe@example.com',
      userName: 'johndoe',
      password: '*****',
      postcode: '12345',
      firstName: 'John',
      lastName: 'Doe',
      street: 'Main St',
      streetnumber: '1',
      country: 'USA',
      loggedin: true,
      confirmed: true,
      role: 'user'
    },
    {
      email: 'john.doe@example.com',
      userName: 'johndoe',
      password: '*****',
      postcode: '12345',
      firstName: 'John',
      lastName: 'Doe',
      street: 'Main St',
      streetnumber: '1',
      country: 'USA',
      loggedin: true,
      confirmed: true,
      role: 'user'
    },
    {
      email: 'john.doe@example.com',
      userName: 'johndoe',
      password: '*****',
      postcode: '12345',
      firstName: 'John',
      lastName: 'Doe',
      street: 'Main St',
      streetnumber: '1',
      country: 'USA',
      loggedin: true,
      confirmed: true,
      role: 'user'
    },
    {
      email: 'john.doe@example.com',
      userName: 'johndoe',
      password: '*****',
      postcode: '12345',
      firstName: 'John',
      lastName: 'Doe',
      street: 'Main St',
      streetnumber: '1',
      country: 'USA',
      loggedin: true,
      confirmed: true,
      role: 'user'
    },
  ];

  getUsers(): UserManagement[] {
    return this.users;
  }

  updateUser(user: UserManagement): void {
    const index = this.users.findIndex(u => u.email === user.email);
    if (index !== -1) {
      this.users[index] = user;
    }
  }
}
