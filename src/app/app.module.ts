import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateClientComponent } from './component/client/create-client/create-client.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { DashboardClientComponent } from './component/client/dashboard-client/dashboard-client.component';
import { CreateServiceOfferComponent } from './component/client/create-service-offer/create-service-offer.component';
import { TopMenuComponent } from './component/top-menu/top-menu.component';
import { UpdateClientComponent } from './component/client/update-client/update-client.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardArtisanComponent } from './component/artisan/dashboard-artisan/dashboard-artisan.component';
import { SignOutComponent } from './component/sign-out/sign-out.component';
import { UpdateServiceOfferComponent } from './component/client/update-service-offer/update-service-offer.component';
import { ListServiceOfferClientComponent } from './component/client/list-service-offer-client/list-service-offer-client.component';
import { CreateArtisanComponent } from './component/artisan/create-artisan/create-artisan.component';
import { UpdateArtisanComponent } from './component/artisan/update-artisan/update-artisan.component';
import { CreateServiceProposalComponent } from './component/artisan/create-service-proposal/create-service-proposal.component';
import { UpdateServiceProposalComponent } from './component/artisan/update-service-proposal/update-service-proposal.component';
import { CreateServiceInterventionComponent } from './component/artisan/create-service-intervention/create-service-intervention.component';
import { UpdateServiceInterventionComponent } from './component/artisan/update-service-intervention/update-service-intervention.component';
import { ListServiceInterventionComponent } from './component/artisan/list-service-intervention/list-service-intervention.component';
import { ListServiceOfferArtisanComponent } from './component/artisan/list-service-offer-artisan/list-service-offer-artisan.component';
import { ListServiceProposalArtisanComponent } from './component/artisan/list-service-proposal-artisan/list-service-proposal-artisan.component';
import { ListServiceProposalClientComponent } from './component/client/list-service-proposal-client/list-service-proposal-client.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateClientComponent,
    DashboardClientComponent,
    CreateServiceOfferComponent,
    TopMenuComponent,
    UpdateClientComponent,
    LoginComponent,
    DashboardArtisanComponent,
    SignOutComponent,
    UpdateServiceOfferComponent,
    ListServiceOfferClientComponent,
    CreateArtisanComponent,
    UpdateArtisanComponent,
    CreateServiceProposalComponent,
    UpdateServiceProposalComponent,
    CreateServiceInterventionComponent,
    UpdateServiceInterventionComponent,
    ListServiceInterventionComponent,
    ListServiceOfferArtisanComponent,
    ListServiceProposalArtisanComponent,
    ListServiceProposalClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
