import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ServiceOfferService } from '../../../service/service-offer.service';
import { ServiceOfferInformation } from '../../../dto/serviceOfferInformation';
import { Category } from '../../../class/category';
import { Service } from '../../../class/service';
import { Observable } from 'rxjs';
import { NavbarService } from '../../../service/navbar.service';

@Component({
  selector: 'app-list-service-offer-artisan',
  templateUrl: './list-service-offer-artisan.component.html',
  styleUrls: ['./list-service-offer-artisan.component.css']
})
export class ListServiceOfferArtisanComponent implements OnInit {

  serviceOffersInformations : Observable<ServiceOfferInformation[]>;

  constructor(private serviceOfferService : ServiceOfferService, private router: Router, private nav : NavbarService) { }

  ngOnInit(): void {

    this.nav.show();
    this.nav.showItem();

    this.serviceOfferService.getAllServiceOffer().subscribe(data => {
      console.log(data);
      this.serviceOffersInformations = data;
    },
    error => console.log(error));

  }

}
