import { Component, OnInit } from '@angular/core';
import { ServiceInterventionInformation } from '../../../dto/serviceInterventionInformation';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ServiceInterventionService } from '../../../service/service-intervention.service';
import { ServiceService } from '../../../service/service.service';
import { CategoryService } from '../../../service/category.service';
import { Category } from '../../../class/category';
import { Service } from '../../../class/service';
import { Observable } from 'rxjs';
import { NavbarService } from '../../../service/navbar.service';

@Component({
  selector: 'app-create-service-intervention',
  templateUrl: './create-service-intervention.component.html',
  styleUrls: ['./create-service-intervention.component.css']
})
export class CreateServiceInterventionComponent implements OnInit {

  serviceInterventionInformation : ServiceInterventionInformation = new ServiceInterventionInformation();
  address : String;
  postalCode : String;
  town : String;
  categories : Observable<Category[]>;
  services : Observable<Service[]>;
  category : Category = new Category();

  constructor(private cookieService : CookieService, private serviceInterventionService : ServiceInterventionService, private serviceService : ServiceService, private categoryService : CategoryService, private router: Router, private nav : NavbarService) { }

  ngOnInit(): void {

    this.nav.show();
    this.nav.showItem();

    this.categoryService.getAllCategories().subscribe(data => {
      console.log(data);
      this.categories = data;
    },
    error => console.log(error));
    
  }

  onChange(categoryId: number) : void {
    this.category.categoryId = categoryId;

    this.serviceService.getAllServicesByCategory(this.category).subscribe(data =>{
      console.log(data);
      this.services = data;
    });

  }

  //assign the serviceId to the dto 
  onChangeServices(serviceId : string) : void{
    this.serviceInterventionInformation.serviceId = parseInt(serviceId);
  }

  onSubmit(): void {

    this.serviceInterventionInformation.address = this.address +','+ this.postalCode +','+ this.town; 

    if (this.address != '' && this.postalCode != ''){

      this.serviceInterventionService.getLatitudeLongitude(this.address, this.postalCode).subscribe(data =>{
        //get the latitude and longitude of the address
        this.serviceInterventionInformation.longitude = data.features[0].geometry.coordinates[0];
        this.serviceInterventionInformation.latitude = data.features[0].geometry.coordinates[1];
        if (this.cookieService.check('artisanId')){
          //get the clientId from the cookies
          this.serviceInterventionInformation.artisanId = parseInt(this.cookieService.get('artisanId'));
        }
        this.send();
      },
      error => console.log(error));

    }

  }

  send(): void {
    
    //create the serviceIntervention
    this.serviceInterventionService.saveServiceIntervention(this.serviceInterventionInformation).subscribe(data => {
      console.log(data);
      this.router.navigate(['/artisan/mesServices']);
    },error => console.log(error));
  }

}
