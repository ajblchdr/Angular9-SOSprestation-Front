import { Component, OnInit } from '@angular/core';
import { ServiceOfferInformation } from '../../../dto/serviceOfferInformation';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ServiceOfferService } from '../../../service/service-offer.service';
import { ServiceService } from '../../../service/service.service';
import { CategoryService } from '../../../service/category.service';
import { Category } from '../../../class/category';
import { Service } from '../../../class/service';
import { Observable } from 'rxjs';
import { NavbarService } from '../../../service/navbar.service';


@Component({
  selector: 'app-create-service-offer',
  templateUrl: './create-service-offer.component.html',
  styleUrls: ['./create-service-offer.component.css']
})
export class CreateServiceOfferComponent implements OnInit {

  serviceOfferInformation : ServiceOfferInformation = new ServiceOfferInformation();
  address : String;
  postalCode : String;
  town : String;
  categories : Observable<Category[]>;
  services : Observable<Service[]>;
  category : Category = new Category();

  constructor(private cookieService : CookieService, private serviceOfferService : ServiceOfferService, private serviceService : ServiceService, private categoryService : CategoryService, private router: Router, private nav : NavbarService) { }

  ngOnInit(): void {

    this.nav.show();
    this.nav.showItem();

    //get all the categories when the page loaded
    this.categoryService.getAllCategories().subscribe(data => {
      console.log(data);
      this.categories = data;
    },
    error => console.log(error));

  }

  //get all th services link to the category selected 
  onChange(categoryId: number) : void {
    this.category.categoryId = categoryId;

    this.serviceService.getAllServicesByCategory(this.category).subscribe(data =>{
      console.log(data);
      this.services = data;
    });

  }

  //assign the serviceId to the dto 
  onChangeServices(serviceId : string) : void{
    this.serviceOfferInformation.serviceId = parseInt(serviceId);
  }

  onSubmit(): void {

    this.serviceOfferInformation.address = this.address +','+ this.postalCode +','+ this.town; 

    if (this.address != '' && this.postalCode != ''){

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
    this.serviceOfferService.saveServiceOffer(this.serviceOfferInformation).subscribe(data => {
      this.router.navigate(['/client/mesDemandes']);
    },error => console.log(error));
  }

}
