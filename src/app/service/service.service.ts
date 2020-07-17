import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getAllServicesByCategory(category : Object): Observable<any>{
    return this.http.post<any>(this.baseUrl+'getServicesByCategory',category);
  }
}
