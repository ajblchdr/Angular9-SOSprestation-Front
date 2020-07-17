import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ClientService } from '../../../service/client.service';
import { Client } from '../../../class/client';
import { Account } from '../../../class/account';
import { Address } from '../../../class/address';
import { Data } from '../../../class/data';
import { AccountInformation } from '../../../dto/accountInformation';
import { NavbarService } from '../../../service/navbar.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  accountInformation : AccountInformation = new AccountInformation();
  private cookieValue : String;

  account: Account = new Account();

  constructor(private cookieService : CookieService, private clientService: ClientService, private router: Router, private nav : NavbarService) { }

  ngOnInit(): void {

    this.nav.show();
    this.nav.showItem();

    this.account.accountId = parseInt(this.cookieService.get('accountId'));
    
    this.clientService.getClientById(this.account).subscribe(data => 
      {this.accountInformation = data; console.log(data)}, 
      error => console.log(error));
  }

  onSubmit() {
    this.save();
  }

  save() {
    this.clientService.updateClient(this.accountInformation).subscribe(data => console.log(data), error => console.log(error));
  }


}
