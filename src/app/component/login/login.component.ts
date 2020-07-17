import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AccountInformation } from '../../dto/accountInformation';
import { LoginInformation } from '../../dto/loginInformation';
import { AccountService } from '../../service/account.service';
import { NavbarService } from '../../service/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private cookieValue : String;
  accountInformation : AccountInformation = new AccountInformation();
  loginInformation : LoginInformation = new LoginInformation();
  checker : boolean;

  constructor(private cookieService : CookieService, private router: Router, private accountService : AccountService, private nav : NavbarService ) { }

  ngOnInit(): void {
    
    this.nav.hide();
    this.toRedirect();

  }

  onSubmit(): void {

    this.accountService.login(this.accountInformation).subscribe(data =>{
        this.loginInformation = data;
        
        if (this.checker){
          this.cookieService.set('accountId', this.loginInformation.accountId.toString(), 365);
          if (this.loginInformation.artisanId != 0){
            this.cookieService.set('artisanId', this.loginInformation.artisanId.toString(), 365);
          }
          else if (this.loginInformation.clientId != 0){
            this.cookieService.set('clientId', this.loginInformation.clientId.toString(), 365);
          }
        }
        else {
          this.cookieService.set('accountId', this.loginInformation.accountId.toString());
          if (this.loginInformation.artisanId != 0){
            this.cookieService.set('artisanId', this.loginInformation.artisanId.toString());
          }
          else if (this.loginInformation.clientId != 0){
            this.cookieService.set('clientId', this.loginInformation.clientId.toString());
          }
        }
        this.toRedirect();
      },
      error => console.log(error));

  }

  toRedirect(): void{ 

    if (this.cookieService.check('clientId')){
      this.router.navigate(['/client/tableauDeBord']);
    }
    if (this.cookieService.check('artisanId')){
      this.router.navigate(['/artisan/tableauDeBord']);
    }

  }


}
