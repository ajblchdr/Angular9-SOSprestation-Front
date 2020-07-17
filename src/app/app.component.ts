import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NavbarService } from './service/navbar.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'my-app';

  message : String = "Nous utilisons les cookies afin de fournir les services et fonctionnalités proposés sur notre site et afin d’améliorer l’expérience de nos utilisateurs." + 
  "Les cookies sont des données qui sont téléchargés ou stockés sur votre ordinateur ou sur tout autre appareil. En cliquant sur J'accepte, vous acceptez l’utilisation des cookies." +
  "Vous pourrez toujours les désactiver ultérieurement. Si vous supprimez ou désactivez nos cookies, vous pourriez rencontrer des interruptions ou des problèmes d’accès au site.";

  constructor(private location: Location, private router: Router, public nav : NavbarService, private cdRef:ChangeDetectorRef){}

  ngOnInit(): void {
    this.nav.show();
    this.nav.showItem();


    let cc = window as any;
       cc.cookieconsent.initialise({
         palette: {
           popup: {
             background: "#164969"
           },
           button: {
             background: "#ffe000",
             text: "#164969"
           }
         },
         theme: "edgeless",
         content: {
           message: this.message,
           dismiss: "J'accepte",
           link: "",
           href : ""
           //href: environment.Frontend + "/dataprivacy" 
         }
       });


  }

  ngAfterViewChecked() {
    //this.nav.show();
    this.cdRef.detectChanges();
  }

  previous() : void{
    history.back();
  }


}
