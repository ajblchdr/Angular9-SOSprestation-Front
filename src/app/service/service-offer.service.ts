import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceOfferService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getLatitudeLongitude(address : String, postalCode : String) : Observable<any> {
    return this.http.get('https://api-adresse.data.gouv.fr/search/?q='+address+'&postcode='+postalCode);
  }

  saveServiceOffer(data : object) : Observable<any> {
    return this.http.post<any>(this.baseUrl+'createServiceOffer',data);
  }

  updateServiceOffer(data : object) : Observable<any> {
    return this.http.post<any>(this.baseUrl+'updateServiceOffer',data);
  }

  getAllServiceOffersByClient (client : object) : Observable<any> {
    return this.http.post<any>(this.baseUrl+'getServiceOffersByClient',client);
  }

  getServiceOfferById (data : object) : Observable<any> {
    return this.http.post<any>(this.baseUrl+'getServiceOfferById',data);
  }

  getAllServiceOffer () : Observable<any> {
    return this.http.get(this.baseUrl+'getAllServiceOffers');
  }


}
