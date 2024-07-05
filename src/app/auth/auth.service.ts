import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  isLoggedIn(): boolean {
    console.log("Checking if user is logged in...");
    return !!localStorage.getItem('userToken');
  }
}