import { Component, OnInit } from '@angular/core';
import { EtudiantServiceService } from '../../services/etudiant-service.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  etudiants: any[] = [];

  constructor(private etudiantService: EtudiantServiceService) { }

  ngOnInit(): void {
    this.etudiants = this.etudiantService.getAllEtudiants();
  }
}
