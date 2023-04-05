import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // get() method which corresponds to HTTP GET Request
  // get(url: string) {
  //   return this.http.get(url);
  // }
  getData(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
  }

  // post() method which corresponds to HTTP GET Request
  // post(url: string, data: any) {
  //   return this.http.post(url, data);
  // }
  postData(data: any): Observable<any> {
    return this.http.post<any>('https://jsonplaceholder.typicode.com/posts', data);
  }

  // delete() method which corresponds to HTTP GET Request
  // delete(url: string) {
  //   return this.http.delete(url);
  // }
  deleteData(id: number): Observable<any> {
    return this.http.delete<any>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

}
