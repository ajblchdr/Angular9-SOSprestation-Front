import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ServiceInterventionService } from '../../../service/service-intervention.service';
import { ServiceService } from '../../../service/service.service';
import { CategoryService } from '../../../service/category.service';
import { Category } from '../../../class/category';
import { Service } from '../../../class/service';
import { Observable } from 'rxjs';
import { ServiceInterventionInformation } from '../../../dto/serviceInterventionInformation';
import { NavbarService } from '../../../service/navbar.service';

@Component({
  selector: 'app-list-service-intervention',
  templateUrl: './list-service-intervention.component.html',
  styleUrls: ['./list-service-intervention.component.css']
})
export class ListServiceInterventionComponent implements OnInit {

  serviceInterventionsInformations : Observable<ServiceInterventionInformation[]>;
  serviceInterventionInformation : ServiceInterventionInformation = new ServiceInterventionInformation();

  constructor(private cookieService : CookieService, private serviceInterventionService : ServiceInterventionService, private serviceService : ServiceService, private categoryService : CategoryService, private router: Router, private nav : NavbarService) { }

  ngOnInit(): void {

    this.nav.show();
    this.nav.showItem();

    if (this.cookieService.check('artisanId')){
      this.serviceInterventionInformation.artisanId = parseInt(this.cookieService.get('artisanId'));
    }

    this.serviceInterventionService.getAllServiceIntervention(this.serviceInterventionInformation).subscribe(data => {
      console.log(data);
      this.serviceInterventionsInformations = data;
    },
    error => console.log(error));
  }

}
