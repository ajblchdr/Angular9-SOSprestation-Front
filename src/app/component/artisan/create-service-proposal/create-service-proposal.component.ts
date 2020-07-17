import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../../service/navbar.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ServiceProposalService } from '../../../service/service-proposal.service';
import { ServiceProposalInformation } from 'src/app/dto/serviceProposalInformation';

@Component({
  selector: 'app-create-service-proposal',
  templateUrl: './create-service-proposal.component.html',
  styleUrls: ['./create-service-proposal.component.css']
})
export class CreateServiceProposalComponent implements OnInit {

  serviceProposalInformation : ServiceProposalInformation = new ServiceProposalInformation();

  constructor(private serviceProposalService : ServiceProposalService, private router: Router, private route: ActivatedRoute, private cookieService : CookieService, private nav : NavbarService) { }

  ngOnInit(): void {
    this.nav.show();
    this.nav.showItem();

    if(this.route.snapshot.queryParamMap.has('id')){
      this.serviceProposalInformation.serviceOfferId = parseInt(this.route.snapshot.queryParamMap.get("id"));
    }
    
    if (this.cookieService.check('artisanId')){
      this.serviceProposalInformation.artisanId = parseInt(this.cookieService.get('artisanId'));
    }
    
  }

  onSubmit() : void{
    this.serviceProposalService.saveServiceProposal(this.serviceProposalInformation).subscribe(data =>{
      this.router.navigate(['/artisan/mesPropositions']);
    },error => console.log(error));
  }

}
