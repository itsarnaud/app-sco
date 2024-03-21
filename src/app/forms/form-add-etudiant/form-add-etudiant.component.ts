import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EtudiantServiceService } from '../../services/etudiant-service.service';

@Component({
  selector: 'app-form-add-etudiant',
  templateUrl: './form-add-etudiant.component.html',
  styles: ``
})
export class FormAddEtudiantComponent implements OnInit {
  etuForm!: FormGroup;

  ngOnInit(): void {
      this.etuForm = new FormGroup ({
        id: new FormControl(""),
        nom: new FormControl(""),
        prenom: new FormControl(""),
        cp: new FormControl(""),
        ville: new FormControl(""),
        courriel: new FormControl(""),
        genre: new FormControl(""),
        age: new FormControl("")
      })
  }

  login() {

  }
}
