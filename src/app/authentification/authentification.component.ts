import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnexionComponent } from '../connexion/connexion.component';
import { InscriptionComponent } from '../inscription/inscription.component';


@Component({
  selector: 'app-authentification',
  standalone: true,
  imports: [RouterModule,ConnexionComponent,CommonModule,InscriptionComponent],
  templateUrl: './authentification.component.html',
  styleUrl: './authentification.component.css'
})
export class AuthentificationComponent implements OnInit {
  type: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.type = params['type'];
    });
  }
}
