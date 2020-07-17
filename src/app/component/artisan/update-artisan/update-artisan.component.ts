import { Component, OnInit } from '@angular/core';
import { AccountInformation } from '../../../dto/accountInformation';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AccountService } from '../../../service/account.service';
import { Account } from '../../../class/account';
import { NavbarService } from '../../../service/navbar.service';

@Component({
  selector: 'app-update-artisan',
  templateUrl: './update-artisan.component.html',
  styleUrls: ['./update-artisan.component.css']
})
export class UpdateArtisanComponent implements OnInit {

  accountInformation : AccountInformation = new AccountInformation();
  account: Account = new Account();

  constructor(private cookieService : CookieService, private accountService: AccountService, private router: Router, private nav : NavbarService) { }

  ngOnInit(): void {

    this.nav.show();
    this.nav.showItem();

    this.account.accountId = parseInt(this.cookieService.get('accountId'));
    
    this.accountService.getArtisanById(this.account).subscribe(data => 
      {this.accountInformation = data; console.log(data)}, 
      error => console.log(error));

  }

  onSubmit() {
    this.accountService.updateArtisan(this.accountInformation).subscribe(data => console.log(data), error => console.log(error));
  }

}
