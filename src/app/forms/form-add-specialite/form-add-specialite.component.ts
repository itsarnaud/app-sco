import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-add-specialite',
  templateUrl: './form-add-specialite.component.html',
  styles: ``
})
export class FormAddSpecialiteComponent  implements OnInit {
  speForm!: FormGroup;

  ngOnInit(): void {
      this.speForm = new FormGroup ({
        id: new FormControl(""),
        libelle: new FormControl("")
      })
  }

  onSubmit(): void {
    localStorage.setItem('speForm', JSON.stringify(this.speForm.value));
    this.speForm.controls['id'].setValue("");
    this.speForm.controls['libelle'].setValue("");
  }

  clear(): void {
    this.speForm.controls['id'].setValue("");
    this.speForm.controls['libelle'].setValue("");
  }
}
{

}
