import { Injectable } from '@angular/core';
import { Specialite } from '../models/specialite';

@Injectable({
  providedIn: 'root'
})
export class SpecialiteServiceService {

  specialites: Specialite[] = [
    new Specialite("DEV APP",1),
    new Specialite("ING RESEAUX",2),
    new Specialite("INTEGRATEUR",3),
    new Specialite("CHEF DE PROJET",4),
    new Specialite("INFOGRAPHISTE",5),
    new Specialite("UX DESIGNER",6),
    new Specialite("DEVELOPPEUR MOBILE",7)
  ];

  getAllspecialites(): Specialite[] {
    return this.specialites;
  }

  getspecialitesById(SpeID: number): Specialite {
    const specialite = this.specialites.find(specialite => specialite._idSpec === SpeID);
    if (!specialite) {
      alert("Spécialité introuvable ou ID erroné.")
      throw new Error('Spécialité introuvable');
    } else {
      return specialite;
    }
  }
}
