import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceInterventionService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  saveServiceIntervention(data : object) : Observable<any> {
    return this.http.post<any>(this.baseUrl+'saveServiceIntervention',data);
  }

  updateServiceIntervention(data : object) : Observable<any> {
    return this.http.post<any>(this.baseUrl+'updateServiceIntervention',data);
  }

  getAllServiceIntervention(data : object) : Observable<any> {
    return this.http.post<any>(this.baseUrl+'getAllServiceIntervention',data);
  }

  getServiceInterventionById(data : Object) : Observable<any> {
    return this.http.post<any>(this.baseUrl+'getServiceInterventionById', data);
  }

  getLatitudeLongitude(address : String, postalCode : String) : Observable<any> {
    return this.http.get('https://api-adresse.data.gouv.fr/search/?q='+address+'&postcode='+postalCode);
  }

}
