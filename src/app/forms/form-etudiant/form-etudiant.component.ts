import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EtudiantServiceService } from '../../services/etudiant-service.service';

@Component({
  selector: 'app-form-etudiant',
  templateUrl: './form-etudiant.component.html',
  styles: ``
})
export class FormEtudiantComponent implements OnInit {
  etuForm!: FormGroup;
  etuInfo!: any;

  constructor( private EtudiantService: EtudiantServiceService ) { }

  ngOnInit() {
    this.etuForm = new FormGroup ({
      id: new FormControl("")
    })
  }

  login() {
    const id = this.etuForm.get('id')?.value;
    this.etuInfo = this.EtudiantService.getEtudiantsById(id);
  }

  clear() {
    this.etuForm.controls['id'].setValue("");
    this.etuInfo = "";
  }
}
