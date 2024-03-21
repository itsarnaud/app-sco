import { Component, OnInit } from '@angular/core';
import { SpecialiteServiceService } from '../../services/specialite-service.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrl: './specialite.component.css'
})
export class SpecialiteComponent implements OnInit {
  specialites: any[] = [];

  constructor(private specialiteService: SpecialiteServiceService) { }

  ngOnInit(): void {
    this.specialites = this.specialiteService.getAllspecialites();
  }
}
