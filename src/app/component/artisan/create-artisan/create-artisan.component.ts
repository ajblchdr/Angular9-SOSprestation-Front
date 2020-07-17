import { AccountInformation } from '../../../dto/accountInformation'
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../../service/account.service';
import { AppComponent } from '../../../app.component';
import { NavbarService } from '../../../service/navbar.service';

@Component({
  selector: 'app-create-artisan',
  templateUrl: './create-artisan.component.html',
  styleUrls: ['./create-artisan.component.css']
})


export class CreateArtisanComponent implements OnInit {

  accountInformation : AccountInformation = new AccountInformation();

  constructor(private accountService : AccountService, private router : Router, private nav : NavbarService) { }

  ngOnInit(): void {
    this.nav.show();
    this.nav.hideItem();
  }

  onSubmit() {
    console.log(this.accountInformation);
    this.accountService.saveArtisan(this.accountInformation)
     .subscribe(data => console.log(data), error => console.log(error));
    this.accountInformation = new AccountInformation();
    this.router.navigate(['']);
  }


}
