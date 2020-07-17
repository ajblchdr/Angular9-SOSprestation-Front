import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../../service/navbar.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ServiceProposalService } from '../../../service/service-proposal.service';
import { ServiceProposalInformation } from 'src/app/dto/serviceProposalInformation';

@Component({
  selector: 'app-list-service-proposal-artisan',
  templateUrl: './list-service-proposal-artisan.component.html',
  styleUrls: ['./list-service-proposal-artisan.component.css']
})
export class ListServiceProposalArtisanComponent implements OnInit {

  serviceProposalInformation : ServiceProposalInformation = new ServiceProposalInformation();
  serviceProposalsInformations : Observable<ServiceProposalInformation[]>

  constructor(private serviceProposalService : ServiceProposalService, private router: Router, private route: ActivatedRoute, private cookieService : CookieService, private nav : NavbarService) { }

  ngOnInit(): void {
    this.nav.show();
    this.nav.showItem();

    if (this.cookieService.check('artisanId')){
      this.serviceProposalInformation.artisanId = parseInt(this.cookieService.get('artisanId'));
    }

    this.serviceProposalService.getAllServiceProposalByArtisan(this.serviceProposalInformation).subscribe(data =>{
      console.log(data);
      this.serviceProposalsInformations = data;
    },error => console.log(error));

  }

}
