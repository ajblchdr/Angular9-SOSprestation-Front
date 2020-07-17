import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  login(data : Object): Observable<any>{
    return this.http.post(this.baseUrl+'login', data);
  }

  saveArtisan(data : Object):Observable<any>{
    return this.http.post(this.baseUrl+'saveArtisan', data);
  }

  updateArtisan(data: Object): Observable<Object> {
    return this.http.post(this.baseUrl+'updateArtisan', data);
  }

  getArtisanById(account : Object): Observable<any>{
    return this.http.post<any>(this.baseUrl+'getArtisanData', account);
  }
}
