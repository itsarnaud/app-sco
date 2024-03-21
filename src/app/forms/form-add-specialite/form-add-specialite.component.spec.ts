import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddSpecialiteComponent } from './form-add-specialite.component';

describe('FormAddSpecialiteComponent', () => {
  let component: FormAddSpecialiteComponent;
  let fixture: ComponentFixture<FormAddSpecialiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormAddSpecialiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormAddSpecialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
