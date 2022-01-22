import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FitnessService } from 'src/app/services/fitness.service';
import { ModalController } from '@ionic/angular';
import { MealDetailPage } from '../meal-detail/meal-detail.page';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.page.html',
  styleUrls: ['./meals.page.scss'],
})
export class MealsPage implements OnInit {
  meals: any = [];
  meal: any;
  search = '';

  apiUrl = 'https://exercise.cngroup.dk/api';

  constructor(
    private http: HttpClient,
    private fitnessService: FitnessService,
    private modalCtrl: ModalController
  ) {}

  btnMealsClicked(): void {
    this.fitnessService.getMeals().subscribe((data) => {
      console.log(data);
      this.meals = data;
    });
  }

  btnMealClicked(slug: string): void {
    this.fitnessService.getMeal(slug).subscribe((data) => {
      console.log(data);
      this.meal = data;
      this.showModal();
    });
  }

  async showModal() {
    const modal = await this.modalCtrl.create({
      component: MealDetailPage,
      componentProps: {
        title: this.meal.title,
        directions: this.meal.directions,
        preparionTime: this.meal.preparionTime,
        servingCount: this.meal.servingCount,
        ingredients: this.meal.ingredients,
      },
    });
    console.log(this.meal.ingredients);
    await modal.present();
  }

  ngOnInit() {}
}
