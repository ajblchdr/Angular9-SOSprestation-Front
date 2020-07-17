import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { NavbarService } from '../../../service/navbar.service';

@Component({
  selector: 'app-dashboard-client',
  templateUrl: './dashboard-client.component.html',
  styleUrls: ['./dashboard-client.component.css']
})
export class DashboardClientComponent implements OnInit {

  private cookieValue : String;

  constructor(private cookieService : CookieService, private nav : NavbarService ) { }

  ngOnInit(): void {

    this.nav.show();
    this.nav.showItem();

  }

}
