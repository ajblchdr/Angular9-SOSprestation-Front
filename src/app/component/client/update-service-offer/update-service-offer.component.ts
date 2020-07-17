import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ServiceOfferInformation } from '../../../dto/serviceOfferInformation';
import { ServiceOfferService } from '../../../service/service-offer.service';
import { ServiceService } from '../../../service/service.service';
import { CategoryService } from '../../../service/category.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import { Category } from '../../../class/category';
import { Service } from '../../../class/service';
import { NavbarService } from '../../../service/navbar.service';

@Component({
  selector: 'app-update-service-offer',
  templateUrl: './update-service-offer.component.html',
  styleUrls: ['./update-service-offer.component.css']
})
export class UpdateServiceOfferComponent implements OnInit {

  serviceOfferInformation : ServiceOfferInformation = new ServiceOfferInformation();
  address : String;
  postalCode : String;
  town : String;
  categories : Observable<Category[]>;
  services : Observable<Service[]>;
  category : Category = new Category();
  locations : String[];

  constructor(private cookieService : CookieService, private serviceOfferService : ServiceOfferService, private router: Router, private route: ActivatedRoute, private serviceService : ServiceService, private categoryService : CategoryService, private nav : NavbarService) { }

  ngOnInit(): void {

    this.nav.show();
    this.nav.showItem();

    this.categoryService.getAllCategories().subscribe(data => {
      console.log(data);
      this.categories = data;
    },
    error => console.log(error));

    this.serviceOfferInformation.serviceOfferId = parseInt(this.route.snapshot.queryParamMap.get("id"));
    this.loadInformation();

  }

  loadInformation() : void {
    this.serviceOfferService.getServiceOfferById(this.serviceOfferInformation).subscribe(data=>{
      console.log(data);
      this.serviceOfferInformation = data;
      if (this.serviceOfferInformation.address != null){
        this.locations = this.serviceOfferInformation.address.split(",");
        this.address = this.locations[0];
        this.postalCode = this.locations[1];
        this.town = this.locations[2];
      }
      this.onChange(this.serviceOfferInformation.categoryId);
      
    });
  }

  onChange(categoryId: number) : void {
    this.category.categoryId = categoryId;

    this.serviceService.getAllServicesByCategory(this.category).subscribe(data =>{
      console.log(data);
      this.services = data;
    });

  }

  onChangeServices(serviceId : string) : void{
    this.serviceOfferInformation.serviceId = parseInt(serviceId);
  }

  onSubmit(): void {

    this.serviceOfferInformation.address = this.address +','+ this.postalCode +','+ this.town; 

    if (this.address != '' || this.postalCode != ''){

      this.serviceOfferService.getLatitudeLongitude(this.address, this.postalCode).subscribe(data =>{
        //get the latitude and longitude of the address
        this.serviceOfferInformation.longitude = data.features[0].geometry.coordinates[0];
        this.serviceOfferInformation.latitude = data.features[0].geometry.coordinates[1];
        if (this.cookieService.check('clientId')){
          //get the clientId from the cookies
          this.serviceOfferInformation.clientId = parseInt(this.cookieService.get('clientId'));
        }
        this.send();
      },
      error => console.log(error));

    }

  }

  send(): void {
    //create the serviceOffer
    this.serviceOfferService.updateServiceOffer(this.serviceOfferInformation).subscribe(data => console.log(data),error => console.log(error));
    this.router.navigate(['client/mesDemandes']);
  }

}
