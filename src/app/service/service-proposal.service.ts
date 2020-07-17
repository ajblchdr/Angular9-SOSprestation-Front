import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceProposalService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  saveServiceProposal(data : object) : Observable<any> {
    return this.http.post<any>(this.baseUrl+'saveServiceProposal',data);
  }

  updateServiceProposal(data : object) : Observable<any> {
    return this.http.post<any>(this.baseUrl+'updateServiceProposal',data);
  }

  getServiceProposalById(data : object) : Observable<any> {
    return this.http.post<any>(this.baseUrl+'getServiceProposalById',data);
  }

  getAllServiceProposalByArtisan(data : object) : Observable<any> {
    return this.http.post<any>(this.baseUrl+'getAllServiceProposalByArtisan',data);
  }

  getAllServiceProposalByServiceOffer(data : object) : Observable<any> {
    return this.http.post<any>(this.baseUrl+'getAllServiceProposalByServiceOffer',data);
  }

  getAllServiceProposalByClient(data : object) : Observable<any> {
    return this.http.post<any>(this.baseUrl+'getAllServiceProposalByClient',data);
  }



}
