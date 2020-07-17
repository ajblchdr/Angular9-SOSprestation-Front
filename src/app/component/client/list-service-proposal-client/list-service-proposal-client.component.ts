import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../../service/navbar.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ServiceProposalService } from '../../../service/service-proposal.service';
import { ServiceProposalInformation } from 'src/app/dto/serviceProposalInformation';

@Component({
  selector: 'app-list-service-proposal-client',
  templateUrl: './list-service-proposal-client.component.html',
  styleUrls: ['./list-service-proposal-client.component.css']
})
export class ListServiceProposalClientComponent implements OnInit {

  serviceProposalInformation : ServiceProposalInformation = new ServiceProposalInformation();
  serviceProposalsInformations : Observable<ServiceProposalInformation[]>

  constructor(private serviceProposalService : ServiceProposalService, private router: Router, private route: ActivatedRoute, private cookieService : CookieService, private nav : NavbarService) { }

  ngOnInit(): void {
    this.nav.show();
    this.nav.showItem();

    if (this.cookieService.check('clientId')){
      this.serviceProposalInformation.clientId = parseInt(this.cookieService.get('clientId'));
    }

    if(this.route.snapshot.queryParamMap.has('id')){
      this.serviceProposalInformation.serviceOfferId = parseInt(this.route.snapshot.queryParamMap.get("id"));
      this.loadAllServiceProposalByServiceOffer();
    }
    else {
      this.loadAllServiceProposal();
    }

  }

  loadAllServiceProposal() : void {
    this.serviceProposalService.getAllServiceProposalByClient(this.serviceProposalInformation).subscribe(data =>{
      console.log(data);
      this.serviceProposalsInformations = data;
    },error => console.log(error));
  }

  loadAllServiceProposalByServiceOffer() : void {
    this.serviceProposalService.getAllServiceProposalByServiceOffer(this.serviceProposalInformation).subscribe(data =>{
      console.log(data);
      this.serviceProposalsInformations = data;
    },error => console.log(error));
  }

}
