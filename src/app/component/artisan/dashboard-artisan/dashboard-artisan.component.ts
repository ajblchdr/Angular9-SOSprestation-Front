import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../../service/navbar.service';

@Component({
  selector: 'app-dashboard-artisan',
  templateUrl: './dashboard-artisan.component.html',
  styleUrls: ['./dashboard-artisan.component.css']
})
export class DashboardArtisanComponent implements OnInit {

  constructor( private nav : NavbarService ) { }

  ngOnInit(): void {

    this.nav.show();
    this.nav.showItem();
  }

}
