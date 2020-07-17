import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateClientComponent } from './component/client/create-client/create-client.component';
import { DashboardClientComponent } from './component/client/dashboard-client/dashboard-client.component';
import { TopMenuComponent } from './component/top-menu/top-menu.component';
import { CreateServiceOfferComponent } from './component/client/create-service-offer/create-service-offer.component';
import { UpdateClientComponent } from './component/client/update-client/update-client.component';
import { LoginComponent } from './component/login/login.component';
import { SignOutComponent } from './component/sign-out/sign-out.component';
import { ListServiceOfferClientComponent } from './component/client/list-service-offer-client/list-service-offer-client.component';
import { UpdateServiceOfferComponent } from './component/client/update-service-offer/update-service-offer.component';
import { CreateArtisanComponent } from './component/artisan/create-artisan/create-artisan.component';
import { DashboardArtisanComponent } from './component/artisan/dashboard-artisan/dashboard-artisan.component';
import { UpdateArtisanComponent } from './component/artisan/update-artisan/update-artisan.component';
import { ListServiceInterventionComponent } from './component/artisan/list-service-intervention/list-service-intervention.component';
import { CreateServiceInterventionComponent } from './component/artisan/create-service-intervention/create-service-intervention.component';
import { UpdateServiceInterventionComponent } from './component/artisan/update-service-intervention/update-service-intervention.component';
import { CreateServiceProposalComponent } from './component/artisan/create-service-proposal/create-service-proposal.component';
import { UpdateServiceProposalComponent } from './component/artisan/update-service-proposal/update-service-proposal.component';
import { ListServiceOfferArtisanComponent } from './component/artisan/list-service-offer-artisan/list-service-offer-artisan.component';
import { ListServiceProposalArtisanComponent } from './component/artisan/list-service-proposal-artisan/list-service-proposal-artisan.component';
import { ListServiceProposalClientComponent } from './component/client/list-service-proposal-client/list-service-proposal-client.component';


const routes: Routes = [
  { path: 'client/inscription', component: CreateClientComponent}, //children: [{path: '',outlet: 'topmenu',component: TopMenuComponent}] },
  { path: 'client/tableauDeBord', component: DashboardClientComponent}, //children: [{path: '',outlet: 'topmenu',component: TopMenuComponent}] },
  { path: 'client/monCompte', component: UpdateClientComponent},
  { path: 'client/nouvelleDemande', component: CreateServiceOfferComponent},
  { path: 'client/mesDemandes', component: ListServiceOfferClientComponent},
  { path: 'client/detailsDemande', component: UpdateServiceOfferComponent},
  { path: 'client/mesPropositions', component: ListServiceProposalClientComponent},
  { path: 'client/detailsProposition', component : UpdateServiceProposalComponent},
  { path: 'artisan/inscription', component: CreateArtisanComponent},
  { path: 'artisan/tableauDeBord', component: DashboardArtisanComponent},
  { path: 'artisan/monCompte', component: UpdateArtisanComponent},
  { path: 'artisan/mesServices', component: ListServiceInterventionComponent},
  { path: 'artisan/nouveauService', component: CreateServiceInterventionComponent },
  { path: 'artisan/detailsService', component: UpdateServiceInterventionComponent },
  { path: 'artisan/lesDemandes', component: ListServiceOfferArtisanComponent },
  { path: 'artisan/nouvelleProposition', component : CreateServiceProposalComponent},
  { path: 'artisan/detailsProposition', component : UpdateServiceProposalComponent},
  { path: 'artisan/mesPropositions', component : ListServiceProposalArtisanComponent},
  { path: '', component: LoginComponent},
  { path: 'deconnexion', component: SignOutComponent},
  { path: 'home', component: TopMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
