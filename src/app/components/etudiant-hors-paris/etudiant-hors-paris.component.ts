import { Component, OnInit } from '@angular/core';
import { EtudiantServiceService } from '../../services/etudiant-service.service';

@Component({
  selector: 'app-etudiant-hors-paris',
  templateUrl: './etudiant-hors-paris.component.html',
  styleUrl: './etudiant-hors-paris.component.css'
})
export class EtudiantHorsParisComponent implements OnInit {
  etudiants: any[] = [];

  constructor(private etudiantService: EtudiantServiceService) { }

  ngOnInit(): void {
    this.etudiants = this.etudiantService.getAllEtudiants();
  }
}
