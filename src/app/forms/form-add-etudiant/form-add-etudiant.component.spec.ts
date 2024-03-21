import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddEtudiantComponent } from './form-add-etudiant.component';

describe('FormAddEtudiantComponent', () => {
  let component: FormAddEtudiantComponent;
  let fixture: ComponentFixture<FormAddEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormAddEtudiantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormAddEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
