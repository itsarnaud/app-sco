import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SpecialiteServiceService } from '../../services/specialite-service.service';

@Component({
  selector: 'app-form-specialite',
  templateUrl: './form-specialite.component.html',
  styles: ``
})
export class FormSpecialiteComponent implements OnInit {
  speForm!: FormGroup;
  speInfo!: any;

  constructor( private SpecialiteService: SpecialiteServiceService ) { }

  ngOnInit() {
    this.speForm = new FormGroup ({
      id: new FormControl("")
    })
  }

  login() {
    const id = this.speForm.get('id')?.value;
    this.speInfo = this.SpecialiteService.getspecialitesById(id);
  }

  clear() {
    this.speForm.controls['id'].setValue("");
    this.speInfo = "";
  }
}
