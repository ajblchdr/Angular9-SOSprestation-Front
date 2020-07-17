import { ClientService } from '../../../service/client.service';
import { Client } from '../../../class/client';
import { Account } from '../../../class/account';
import { Address } from '../../../class/address';
import { Data } from '../../../class/data';
import { AccountInformation } from '../../../dto/accountInformation'
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../../../service/navbar.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  accountInformation : AccountInformation = new AccountInformation();

  submitted = false;

  constructor(private clientService: ClientService, private router: Router, private nav : NavbarService) { }

  ngOnInit(): void {
    this.nav.show();
    this.nav.hideItem();
  }

  save() {
    this.clientService.saveClient(this.accountInformation)
      .subscribe(data => console.log(data), error => console.log(error));
    this.accountInformation = new AccountInformation();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['']);
  }

}
