import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient, private cookieService : CookieService) { }

  saveClient(data: Object): Observable<Object> {
    return this.http.post(this.baseUrl+'saveClient', data);
  }

  updateClient(data: Object): Observable<Object> {
    return this.http.post(this.baseUrl+'updateClient', data);
  }

  getClientById(account : Object): Observable<any>{
    return this.http.post<any>(this.baseUrl+'getClientData', account);
  }
}
