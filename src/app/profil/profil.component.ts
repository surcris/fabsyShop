import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { HistoriqueComponent } from './historique/historique.component';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { CompteComponent } from './compte/compte.component';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [CommonModule,NotificationComponent,HeaderComponent,CompteComponent,HistoriqueComponent],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent implements OnInit{
  selectedComponent: string = 'CompteComponent'; // Initialiser à une valeur vide
  constructor(private router: Router){

  }

  ngOnInit(): void {
  }

  navigateToNotification(): void {
    this.selectedComponent = 'NotificationComponent';
  }

  navigateToCompte(): void {
    this.selectedComponent = 'CompteComponent';
  }

  navigateToHistorique(): void {
    this.selectedComponent = 'HistoriqueComponent';
  }
}
