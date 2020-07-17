import { Component, OnInit } from '@angular/core';
import { ServiceOfferService } from '../../../service/service-offer.service';
import { CookieService } from 'ngx-cookie-service';
import { ServiceOfferInformation } from '../../../dto/serviceOfferInformation';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../../../class/client';
import { NavbarService } from '../../../service/navbar.service';

@Component({
  selector: 'app-list-service-offer-client',
  templateUrl: './list-service-offer-client.component.html',
  styleUrls: ['./list-service-offer-client.component.css']
})
export class ListServiceOfferClientComponent implements OnInit {

  private client : Client = new Client();
  serviceOffersinformations : Observable<ServiceOfferInformation[]>;

  constructor(private cookieService : CookieService, private serviceOfferService : ServiceOfferService, private router: Router, private nav : NavbarService) { }

  ngOnInit(): void {

    this.nav.show();
    this.nav.showItem();

    if (this.cookieService.check('clientId')){
      this.client.clientId = parseInt(this.cookieService.get('clientId'));
      this.serviceOfferService.getAllServiceOffersByClient(this.client).subscribe(data => {
        console.log(data);
        this.serviceOffersinformations = data;
      });
    }
    else {
      this.router.navigate(['']);
    }
    
  }

}
