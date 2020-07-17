import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  visible : boolean = true;

  itemVisible : boolean = true;

  url : String = '';

  constructor(private location: Location, private router: Router) { this.visible = true; }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  hideItem() { this.itemVisible = false; }

  showItem() { this.itemVisible = true; }

  previous() : void{
    this.router.navigate([this.url]);
  }

}
