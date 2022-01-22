import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FitnessService, Meal } from '../services/fitness.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  meals: any = [];
  search = '';
  constructor(private fitnessService: FitnessService) {}

  searchMeal() {
    this.meals = this.fitnessService.getMeals();
    console.log(this.fitnessService.getMeals());
  }
  async ngOnInit() {}
}
