import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { EtudiantParisComponent } from './components/etudiant-paris/etudiant-paris.component';
import { EtudiantHorsParisComponent } from './components/etudiant-hors-paris/etudiant-hors-paris.component';
import { SpecialiteComponent } from './components/specialite/specialite.component';
import { FormSpecialiteComponent } from './forms/form-specialite/form-specialite.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormEtudiantComponent } from './forms/form-etudiant/form-etudiant.component';
import { DateComponent } from './components/date/date.component';
import { FormAddSpecialiteComponent } from './forms/form-add-specialite/form-add-specialite.component';
import { FormAddEtudiantComponent } from './forms/form-add-etudiant/form-add-etudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EtudiantComponent,
    SpecialiteComponent,
    EtudiantParisComponent,
    EtudiantHorsParisComponent,
    FormSpecialiteComponent,
    FormEtudiantComponent,
    DateComponent,
    FormAddSpecialiteComponent,
    FormAddEtudiantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
