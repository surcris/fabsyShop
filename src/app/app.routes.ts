
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { NgModule } from '@angular/core';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProfilComponent } from './profil/profil.component';
import { HistoriqueComponent } from './profil/historique/historique.component';

import { NotificationComponent } from './profil/notification/notification.component';
import { CompteComponent } from './profil/compte/compte.component';





export const routes: Routes = [
    { path: '',title:"accueil" , component: HomeComponent },
    { path: 'auth', component: AuthentificationComponent },
    { path: 'inscription',title:"inscription" , component: InscriptionComponent },
    { path: 'connexion',title:"connexion" , component: ConnexionComponent },
    { path: 'profil',  component: ProfilComponent },
    { path: 'historique',  component: HistoriqueComponent },
    { path: 'compte',  component: CompteComponent },
    { path: 'notification',  component: NotificationComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }