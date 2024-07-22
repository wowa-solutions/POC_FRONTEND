import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Dishes } from 'src/models/models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Dishes[]> {
    return this.http.get<Dishes[]>('http://localhost:3000/items/').pipe(
      catchError((error) => {
        console.error('Error fetching data: ', error);
        return of([]); // Rückgabe eines leeren Arrays im Fehlerfall
      }),
    );
  }

  getProductById() {
    this.http
      .get<Dishes>('https://reqres.in/api/posts')
      .subscribe((response) => {
        console.log(response);
      });
  }

  addProduct(id: string) {
    this.http
      .post<Dishes>('https://reqres.in/api/posts', { id: id })
      .subscribe((response) => {
        console.log(response);
      });
  }

  updateProduct(id: string) {
    this.http
      .put<Dishes>('https://reqres.in/api/posts', { id: id })
      .subscribe((response) => {
        console.log(response);
      });
  }

  removeProduct(id: string) {
    this.http
      .delete('https://jsonplaceholder.typicode.com/invalid-url')
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.error('There was an error!', error.message);
        },
      });
  }
}
