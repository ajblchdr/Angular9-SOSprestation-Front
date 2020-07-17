import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  constructor(private cookieService : CookieService, private router: Router) { }

  ngOnInit(): void {


    if (this.cookieService.check('clientId')){
      this.cookieService.delete('clientId');
    }
    
    if (this.cookieService.check('accountId')){
      this.cookieService.delete('accountId');
    }

    if (this.cookieService.check('artisanId')){
      this.cookieService.delete('artisanId');
    }
    
    this.router.navigate(['']);

  }

}
