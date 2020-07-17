import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../../service/navbar.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ServiceProposalService } from '../../../service/service-proposal.service';
import { ServiceProposalInformation } from 'src/app/dto/serviceProposalInformation';

@Component({
  selector: 'app-update-service-proposal',
  templateUrl: './update-service-proposal.component.html',
  styleUrls: ['./update-service-proposal.component.css']
})
export class UpdateServiceProposalComponent implements OnInit {

  serviceProposalInformation : ServiceProposalInformation = new ServiceProposalInformation();
  isArtisan : boolean = true;

  constructor(private serviceProposalService : ServiceProposalService, private router: Router, private route: ActivatedRoute, private cookieService : CookieService, private nav : NavbarService) { }

  ngOnInit(): void {
    this.nav.show();
    this.nav.showItem();

    if(this.route.snapshot.queryParamMap.has('id')){
      this.serviceProposalInformation.serviceProposalId = parseInt(this.route.snapshot.queryParamMap.get("id"));
    }

    if (this.cookieService.check("clientId")){
      this.isArtisan = false;
    }

    this.serviceProposalService.getServiceProposalById(this.serviceProposalInformation).subscribe(data =>{
      this.serviceProposalInformation = data;
    },error => console.log(error));

  }

  onSubmit() : void{
    console.log(this.serviceProposalInformation);
    this.serviceProposalService.updateServiceProposal(this.serviceProposalInformation).subscribe(data =>{
      this.router.navigate(['/artisan/mesPropositions']);
    },error => console.log(error));
  }

}
