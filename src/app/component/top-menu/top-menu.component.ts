import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NavbarService } from '../../service/navbar.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor(private cookieService : CookieService, private router: Router, private navbarService : NavbarService) { }

  ngOnInit(): void {

    console.log(this.cookieService.check('clientId'));
    if(this.cookieService.check('clientId')){
      this.router.navigate(['client/tableauDeBord']);
    }
    console.log(this.cookieService.check('artisanId'));
    if(this.cookieService.check('artisanId')){
      this.router.navigate(['artisan/tableauDeBord']);
    }



  }

}
