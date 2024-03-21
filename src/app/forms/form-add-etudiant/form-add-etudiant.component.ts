import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


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

  onSubmit(): void {
    localStorage.setItem('etuForm', JSON.stringify(this.etuForm.value));
    this.etuForm.controls['id'].setValue("");
    this.etuForm.controls['prenom'].setValue("");
    this.etuForm.controls['nom'].setValue("");
    this.etuForm.controls['cp'].setValue("");
    this.etuForm.controls['ville'].setValue("");
    this.etuForm.controls['courriel'].setValue("");
    this.etuForm.controls['genre'].setValue("");
    this.etuForm.controls['age'].setValue("");
  }

  clear(): void {
    this.etuForm.controls['id'].setValue("");
    this.etuForm.controls['prenom'].setValue("");
    this.etuForm.controls['nom'].setValue("");
    this.etuForm.controls['cp'].setValue("");
    this.etuForm.controls['ville'].setValue("");
    this.etuForm.controls['courriel'].setValue("");
    this.etuForm.controls['genre'].setValue("");
    this.etuForm.controls['age'].setValue("");
  }
}
